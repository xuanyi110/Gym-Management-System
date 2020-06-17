var lambertQ = [
    {
        text: 'get the customer names, ids and their meal plans based on coach id. (Valid input: C1; C2; C3; C4; C5)',
        apiName: "getCusMealByCoach",
        inputs: {
            table1: "customer",
            table2: "coach",
            table3: "meal_plan",
            table4: "meal_plan_recommendation",
        },
        userInputs: ['coach_ID'],
        categories: ['selection']
    },
    {
        text: 'get food item detailed information based on meal plan ID. (Valid input: 1; 2; 3; 4; 5)',
        apiName: "getFIInByMealPlan",
        inputs: {
        },
        userInputs: ['meal_plan_ID'],
        categories: ['selection']
    },
    {
        text: 'get session detailed information based on its coach ID. (Valid input: C1; C2; C3; C4; C5)',
        apiName: "getSessionByCoach",
        inputs: {
        },
        userInputs: ['coach_ID'],
        categories: ['selection']
    },
    {
        text: 'get saled membership detailed information based on its sales ID. (Valid input: S1; S2; S3; S4; S5)',
        apiName: "getSaledMemInfoBySalesID",
        inputs: {
        },
        userInputs: ['sales_ID'],
        categories: ['selection']

    },
    {
        text: 'get membership modification information by manager ID. (Valid input: M1; M2; M3; M4; M5)',
        apiName: "getModInfoByManagerID",
        inputs: {
        },
        userInputs: ['manager_ID'],
        categories: ['selection']
    },
    {
        text: 'get machine information by area ID. (Valid input: 2; 4; 6)',
        apiName: "getMachinesByArea",
        inputs: {
        },
        userInputs: ['area_ID'],
        categories: ['selection']
    },
    {
        text: 'get customers who have the same id with locker or customers and the lockers they reserved. (Valid input: id, customer_id)',
        apiName: "getLockerwithCustomer",
        inputs: {
        },
        userInputs: ['property'],
        categories: ['join']
    },
    {
        text: 'get customer information and course information based on given gym session id. (Valid input: 1; 2; 3; 4; 5)',
        apiName: "getCustSameSession",
        inputs: {
        },
        userInputs: ['session_number'],
        categories: ['selection']
    },
    {
        text: 'get total property in a meal plan by meal plan ID. (Meal_plan_id: 1; 2; 3; 4; 5. property: fat; carbs; protein; calories)',
        apiName: "getProByMealPlan",
        inputs: {
        },
        userInputs: ['meal_plan_ID', 'property'],
        categories: ['nested_aggregation']
    },
    {
        text: 'get number of machines in a area. (Valid input: 1; 2; 4; 6)',
        apiName: "getNumofMachinesinArea",
        inputs: {
        },
        userInputs: ['areaID'],
        categories: ['aggregation']
    },
    {
        text: 'get average value of food properties (Valid input: fat; carbs; protein; calories)',
        apiName: "getAvgInFI",
        inputs: {
        },
        userInputs: ['property'],
        categories: ['aggregation']
    },
    {
        text: 'get all food properties based on users interest (Valid input: fat; carbs; protein; calories)',
        apiName: "getPropertyInFI",
        inputs: {
        },
        userInputs: ['property'],
        categories: ['projection']
    }
];