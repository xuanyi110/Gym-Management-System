const ryanQ = [
  {
    text: 'this is Ryan test 1',
    apiName: 'ryanApiName1',
    inputs: {
      content: '*',
    },
    userInputs: ['table'],
  },
  // Get membership info
  {
    text: 'Get membership info',
    apiName: 'getMembershipInfo',
  },
  // Get all the adult customers
  {
    text: 'Get adult customers',
    apiName: 'getAdults',
  },
  // Get cleaning history(area) of a certain area
  {
    text: 'Get cleaning history',
    apiName: 'getCleanHistory',
    inputs: {
      content: ['areaID'],
    },
    userInputs: ['areaID'],
  },
  // Get all the reserved lockers
  {
    text: 'Get all reserved lockers',
    apiName: 'getReservedLockers',
  },
  // Get courses in a certain area
  {
    text: 'Get courses in area',
    apiName: 'getCoursesInArea',
    inputs: {
      content: ['areaID'],
    },
    userInputs: ['areaID'],
  },
  // Get courses registered by customer
  {
    text: 'Get courses registered by customer',
    apiName: 'getCustCourses',
    inputs: {
      content: ['cust_id'],
    },
    userInputs: ['cust_id'],
  },
  // Get customers who registered the course session
  {
    text: 'Get customers registered in session',
    apiName: 'getSessionCustomers',
    inputs: {
      content: ['session_number'],
    },
    userInputs: ['session_number'],
  },
  // Get membership of a customer
  {
    text: 'Get membership of a customer',
    apiName: 'getCustMembership',
    inputs: {
      content: ['cust_id'],
    },
    userInputs: ['cust_id'],
  },
  // Get coach info of a specific customer
  {
    text: 'Get coach of a customer',
    apiName: 'getCustCoaches',
    inputs: {
      content: ['cust_id'],
    },
    userInputs: ['cust_id'],
  },
];
