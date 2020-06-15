var lambertQ = [
    {
        text: 'get the customer names, ids and their meal plans based on coach id',
        apiName: "getCusMealByCoach",
        inputs: {
            table1: "customer",
            table2: "coach",
            table3: "meal_plan",
            table4: "meal_plan_recommendation",
        },
        userInputs: ['coach_ID']
    },
    {
        text: 'get food item detailed information based on meal plan ID',
        apiName: "getFIInByMealPlan",
        inputs: {
        },
        userInputs: ['meal_plan_ID']
    },
    {
        text: 'get session detailed information based on its coach ID',
        apiName: "getSessionByCoach",
        inputs: {
        },
        userInputs: ['coach_ID']
    },
    {
        text: 'get saled membership detailed information based on its sales ID',
        apiName: "getSaledMemInfoBySalesID",
        inputs: {
        },
        userInputs: ['sales_ID']
    },
    {
        text: 'get membership modification information by manager ID',
        apiName: "getModInfoByManagerID",
        inputs: {
        },
        userInputs: ['manager_ID']
    },
    {
        text: 'get machine information by area ID',
        apiName: "getMachinesByArea",
        inputs: {
        },
        userInputs: ['area_ID']
    },
    {
        text: 'get all occupied lockers info with its customer names',
        apiName: "getLockerwithCustomer",
        inputs: {
        },
        userInputs: []
    },
    {
        text: 'get customer information and course information based on given gym session id',
        apiName: "getCustSameSession",
        inputs: {
        },
        userInputs: ['session_number']
    },
    {
        text: 'get total calories in a meal plan by meal plan ID',
        apiName: "getCalByMealPlan",
        inputs: {
        },
        userInputs: ['meal_plan_ID']
    }
];