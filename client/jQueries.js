var jQ = [
    {
        text: 'Retrieve Membership ID from customer ID',
        apiName: "cus2mem",
        userInputs: ['customerId']
    },
    {
        text: 'Retrieve monthly salary from staff ID',
        apiName: "staff2salary",
        userInputs: ['staffId']
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
        text: 'Retrieve all from',
        apiName: "showAll",
        userInputs: ['table']
    },
    {
        text: 'Count all from',
        apiName: 'countAll',
        userInputs: ['table']
    }
];