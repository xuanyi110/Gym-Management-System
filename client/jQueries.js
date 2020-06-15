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
        text: 'Count all from',
        apiName: 'projectFrom',
        inputs: {
            attr: 'COUNT(*) number_of_tuples'
        },
        userInputs: ['table']
    },
    {
        text: 'Insert into',
        apiName: 'insert',
        userInputs: ['table', 'value']
    },
    {
        text: 'Delete from',
        apiName: 'deleteFromWhere',
        userInputs: ['table', 'condition']
    },
    /*
    ====================== Retrieve all tables ======================
    */
    {
        text: 'Retrieve all from table AREA',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'AREA'
        }
    },
    {
        text: 'Retrieve all from table CLEANING_RECORD',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'CLEANING_RECORD'
        }
    },
    {
        text: 'Retrieve all from table COACH',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'COACH'
        }
    },
    {
        text: 'Retrieve all from table COACH_EXPERIENCE',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'COACH_EXPERIENCE'
        }
    },
    {
        text: 'Retrieve all from table COURSE',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'COURSE'
        }
    },
    {
        text: 'Retrieve all from table COURSE_IN_AREA',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'COURSE_IN_AREA'
        }
    },
    {
        text: 'Retrieve all from table COURSE_REGISTRATION',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'COURSE_REGISTRATION'
        }
    },
    {
        text: 'Retrieve all from table CUSTOMER',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'CUSTOMER'
        }
    },
    {
        text: 'Retrieve all from table FOOD_ITEM',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'FOOD_ITEM'
        }
    },
    {
        text: 'Retrieve all from table FOOD_ITEM_IN_MEAL_PLAN',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'FOOD_ITEM_IN_MEAL_PLAN'
        }
    },
    {
        text: 'Retrieve all from table GYM_SESSION',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'GYM_SESSION'
        }
    },
    {
        text: 'Retrieve all from table JANITOR',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'JANITOR'
        }
    },
    {
        text: 'Retrieve all from table LOCKER',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'LOCKER'
        }
    },
    {
        text: 'Retrieve all from table MACHINE_IN_AREA',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'MACHINE_IN_AREA'
        }
    },
    {
        text: 'Retrieve all from table MANAGER',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'MANAGER'
        }
    },
    {
        text: 'Retrieve all from table MEAL_PLAN',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'MEAL_PLAN'
        }
    },
    {
        text: 'Retrieve all from table MEAL_PLAN_RECOMMENDATION',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'MEAL_PLAN_RECOMMENDATION'
        }
    },
    {
        text: 'Retrieve all from table MEMBERSHIP',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'MEMBERSHIP'
        }
    },
    {
        text: 'Retrieve all from table MEMBERSHIP_MODIFICATION',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'MEMBERSHIP_MODIFICATION'
        }
    },
    {
        text: 'Retrieve all from table PERSONAL_TRAINING',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'PERSONAL_TRAINING'
        }
    },
    {
        text: 'Retrieve all from table REPORT',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'REPORT'
        }
    },
    {
        text: 'Retrieve all from table SALES',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'SALES'
        }
    },
    {
        text: 'Retrieve all from table STAFF',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'STAFF'
        }
    },
    {
        text: 'Retrieve all from table STAFF_LOCATION',
        apiName: "projectFrom",
        inputs: {
            attr: '*',
            table: 'STAFF_LOCATION'
        }
    },
];