var jQ = [
    {
        text: 'Retrieve Membership ID from customer ID',
        apiName: "cus2mem",
        userInputs: ['customerId'],
        categories: ['selection', 'projection']
    },
    {
        text: 'Retrieve monthly salary from staff ID',
        apiName: "staff2salary",
        userInputs: ['staffId'],
        categories: ['selection', 'projection']
    },
    {
        text: 'List all customer ID',
        apiName: "projectFrom",
        inputs: {
            attr: 'ID',
            table: 'CUSTOMER'
        },
        categories: ['selection', 'projection']
    },
    {
        text: 'Retrieve number of personal trainees from coach ID',
        apiName: "coach2trainee",
        userInputs: ['coachId'],
        categories: ['selection', 'projection']
    },
    {
        text: 'Who have participated in all training courses',
        apiName: "whoAttendedAll",
        categories: ['selection', 'projection', 'join', 'division']
    },
    {
        text: 'Count all from',
        apiName: 'projectFrom',
        inputs: {
            attr: 'COUNT(*) number_of_tuples'
        },
        userInputs: ['table'],
        categories: ['selection', 'projection']
    },
];