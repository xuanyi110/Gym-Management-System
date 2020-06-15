var jQ = [
    {
        text: 'Retrieve Membership ID from customer ID',
        apiName: "cus2mem",
        userInputs: ['customerId'],
        categories: ['insert', 'delete', 'update', 'selection', 'projection', 'join', 'aggregation', 'nested_aggregation', 'division']
    },
    {
        text: 'Retrieve monthly salary from staff ID',
        apiName: "staff2salary",
        userInputs: ['staffId'],
        categories: ['insert', 'projection']
    },
    {
        text: 'List all customer ID',
        apiName: "projectFrom",
        inputs: {
            attr: 'ID',
            table: 'CUSTOMER'
        }
    },
    {
        text: 'Retrieve number of personal trainees from coach ID',
        apiName: "coach2trainee",
        userInputs: ['coachId']
    },
    {
        text: 'Who have participated in all training courses',
        apiName: "whoAttendedAll"
    },
    {
        text: 'Count all from',
        apiName: 'projectFrom',
        inputs: {
            attr: 'COUNT(*) number_of_tuples'
        },
        userInputs: ['table']
    },
];