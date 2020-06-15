module.exports = {
  getMembershipInfo: 'SELECT * FROM MEMBERSHIP',
  getAdults: 'SELECT * FROM customer where YEAR(CURDATE()) - YEAR(dob) >= 18',
  getCleanHistory:
    'SELECT a.id, a.name, c.clean_date FROM cleaning_record c, area a WHERE a.id = c.area AND a.id = {{areaID}}',
  getReservedLockers:
    'SELECT ID, customer_ID FROM Locker WHERE customer_id IS NOT NULL',
  getCoursesInArea:
    'SELECT c.id AS course_id, c.title, c.description FROM COURSE c, course_in_area ca, area a WHERE ca.area_id = a.id AND ca.course_id = c.id AND a.id = {{areaID}}',
  getCustCourses:
    'SELECT cr.course_id, c.title, c.description, cr.session_number, gs.schedule from course_registration cr, course c, gym_session gs WHERE cr.customer_id={{cust_id}} AND cr.course_id=c.id AND cr.session_number = gs.session_number',
  getSessionCustomers:
    'SELECT c.id, c.first_name, c.last_name, c.phone, c.email, gs.schedule from course_registration cr, customer c, gym_session gs WHERE cr.customer_id=c.id AND cr.session_number = gs.session_number AND gs.session_number={{session_number}}',
  getCustMembership:
    'SELECT c.id as customer_id, m.data_joined as start_date, m.due_date as end_date FROM customer c, membership m WHERE m.customer_id = c.id AND c.id = {{cust_id}}',
  getCustCoaches:
    'SELECT c.staff_id, s.firstName, s.lastName, c.year_of_exp, ce.coach_level FROM coach c, staff s, course_registration cr WHERE c.staff_id = s.id AND cr.coach_id = c.staff_id AND cr.customer_id = {{cust_id}}',
};
