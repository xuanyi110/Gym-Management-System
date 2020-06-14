module.exports = {
  getMembershipInfo: 'SELECT * FROM MEMBERSHIP',
  getAdults: 'SELECT * FROM customer where YEAR(CURDATE()) - YEAR(dob) >= 18',
};
