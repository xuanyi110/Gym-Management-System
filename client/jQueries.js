var jQ = [
    {
        text: 'Retrieve Membership ID from customer ID (e.g. 1/2/3)',
        apiName: "cus2mem",
        userInputs: ['customerId'],
        categories: ['selection']
    },
    {
        text: 'Retrieve monthly salary from staff ID (e.g. C1/J2/M3)',
        apiName: "staff2salary",
        userInputs: ['staffId'],
        categories: ['selection']
    },
    {
        text: 'List all customer ID',
        apiName: "projectFrom",
        inputs: {
            attr: 'ID',
            table: 'CUSTOMER'
        },
        categories: ['selection']
    },
    {
        text: 'Retrieve number of personal trainees from coach ID (e.g. C1/C2/C3)',
        apiName: "coach2trainee",
        userInputs: ['coachId'],
        categories: ['selection']
    },
    {
        text: 'Who have participated in all training courses',
        apiName: "whoAttendedAll",
        categories: ['division']
    },
    {
        text: 'Count all from (e.g. CUSTOMER/STAFF)',
        apiName: 'projectFrom',
        inputs: {
            attr: 'COUNT(*) number_of_tuples'
        },
        userInputs: ['table'],
        categories: ['selection', 'projection']
    },
];