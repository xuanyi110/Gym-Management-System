module.exports = {
    projectFrom: 'SELECT {{{ attr }}} FROM {{ table }}',
    projectFromWhere: 'SELECT {{{ attr }}} FROM {{ table }} WHERE {{{ condition }}}',
    cus2mem: 'SELECT ID MEMBERSHIP_ID FROM MEMBERSHIP WHERE CUSTOMER_ID="{{ customerId }}"',
    staff2salary: 'SELECT month_salary monthly_salary FROM STAFF WHERE id="{{ staffId }}"',
    coach2trainee: 'SELECT COUNT(*) NUMBER_OF_STUDENT_TRAINED_BY_{{ coachId }} FROM PERSONAL_TRAINING WHERE COACH="{{ coachId }}"',
    whoAttendedAll: '\
        SELECT DISTINCT FIRST_NAME, LAST_NAME\
        FROM CUSTOMER c, COURSE_REGISTRATION cr\
        WHERE c.ID=cr.CUSTOMER_ID\
        AND NOT EXISTS (\
            SELECT ID FROM COURSE\
            WHERE ID NOT IN (\
                SELECT COURSE_ID FROM COURSE_REGISTRATION\
                WHERE COURSE_REGISTRATION.CUSTOMER_ID=c.ID\
            )\
        )\
    ',
    insert: 'INSERT INTO {{ table }} VALUES {{ value }}',
    deleteFromWhere: 'DELETE FROM {{ table }} WHERE {{{ condition }}}',
    joinWhere: 'SELECT {{{ attr }}} FROM {{{ tables }}} WHERE {{{ condition }}}'
}