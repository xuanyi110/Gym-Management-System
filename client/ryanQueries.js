const ryanQ = [
  // Get membership info
  {
    text: 'Get all the membership info',
    apiName: 'getMembershipInfo',
    categories: ['projection'],
  },
  // Get all the adult customers
  {
    text: 'Get all the adult customers',
    apiName: 'getAdults',
    categories: ['selection', 'projection', 'join'],
  },
  // Get cleaning history(area) of a certain area
  {
    text: 'Get cleaning history by area ID',
    apiName: 'getCleanHistory',
    inputs: {
      content: ['areaID'],
    },
    categories: ['selection', 'projection', 'join'],
    userInputs: ['areaID'],
  },
  // Get all the reserved lockers
  {
    text: 'Get all reserved lockers',
    apiName: 'getReservedLockers',
    categories: ['selection', 'projection'],
  },
  // Get courses in a certain area
  {
    text: 'Get courses in area by area ID',
    apiName: 'getCoursesInArea',
    inputs: {
      content: ['areaID'],
    },
    userInputs: ['areaID'],
    categories: ['selection', 'projection', 'join'],
  },
  // Get courses registered by customer
  {
    text: 'Get courses registered by customer',
    apiName: 'getCustCourses',
    inputs: {
      content: ['cust_id'],
    },
    userInputs: ['cust_id'],
    categories: ['selection', 'projection', 'join'],
  },
  // Get customers who registered the course session
  {
    text: 'Get customers registered in session by customer id',
    apiName: 'getSessionCustomers',
    inputs: {
      content: ['session_number'],
    },
    userInputs: ['session_number'],
    categories: ['selection', 'projection', 'join'],
  },
  // Get membership of a customer
  {
    text: 'Get membership of a customer by customer id',
    apiName: 'getCustMembership',
    inputs: {
      content: ['cust_id'],
    },
    userInputs: ['cust_id'],
    categories: ['selection', 'projection', 'join'],
  },
  // Get coach info of a specific customer
  {
    text: 'Get coach of a customer by customer id',
    apiName: 'getCustCoaches',
    inputs: {
      content: ['cust_id'],
    },
    userInputs: ['cust_id'],
    categories: ['selection', 'projection', 'join'],
  },
];
