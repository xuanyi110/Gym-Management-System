var mysql = require('mysql');
var express = require('express');
var mustache = require('mustache');
var schema = require('./schema.json');
var config = require('./config');
var lApi = require('./api/lambert');
var rApi = require('./api/ryan');
var jApi = require('./api/j');

apis = {...lApi, ...rApi, ...jApi, ...extraApi()};

function extraApi() {
    // Auto-generates queries to INSERT, UPDATE for all tables
    var api = {};
    for (let table in schema) {
        var query = `INSERT INTO ${table} VALUES (`;
        for (let attr of schema[table]) {
            query += `'{{{ ${attr} }}}', `;
        }
        query = query.slice(0, -2) + ')';
        api[`insertInto${table}`] = query;
    }
    for (let table in schema) {
        var query = `UPDATE ${table} SET `;
        for (let attr of schema[table]) {
            query += `${attr}='{{{ ${attr} }}}', `;
        }
        query = query.slice(0, -2) + ' WHERE {{{ condition }}}';
        api[`update${table}`] = query;
    }
    return api;
}

function connectDb() {
    var connection = mysql.createConnection({
        host: config.DB_HOST,
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        database: config.DB_NAME,
        socketPath: config.DB_SOCK
    });

    connection.connect();

    return (serverResponse, queryTemplate, inputs) => {
        var query = mustache.render(queryTemplate, inputs);
        if (query.startsWith('UPDATE')) {
            query = query.replace(/\w+='',*/g, '');
            query = query.replace(/,\s+WHERE/, ' WHERE');
        }
        if (query.startsWith('INSERT')) {
            query = query.replace(/''/g, 'null');
        }
        console.log(query);
        connection.query(query, (err, res, field) => {
            if (err) {
                console.log(err);
                serverResponse.status(200).send(JSON.stringify(err));
            }
            console.log('Result is:');
            console.log(res);
            serverResponse.status(200).send(JSON.stringify(res));
        });
    };
}

exports.start = function() {
    dbQuery = connectDb();
    server = express();

    server.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    server.use(express.json());

    server.get('*', (req, res) => {
        console.log('req.url: ' + req.url);
        res.status(200).send(JSON.stringify(schema));
    });

    server.post('*', (req, res) => {
        console.log('request body:')
        console.log(req.body);
        dbQuery(res, apis[req.body['apiName']], req.body['inputs'])
    });

    server.listen(8080, () => {
        console.log('server running at 8080...')
    });
};