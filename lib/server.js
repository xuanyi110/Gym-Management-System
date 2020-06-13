var mysql = require('mysql');
var express = require('express');
var mustache = require('mustache');
var config = require('./config');
var lApi = require('./api/lambert');
var rApi = require('./api/ryan');
var jApi = require('./api/j');

apis = {...lApi, ...rApi, ...jApi};

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
        connection.query(query, (err, res, field) => {
            if (err) throw err;
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
        console.log(req.url);
        console.log(req.body);
        res.status(200).send('GET');
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