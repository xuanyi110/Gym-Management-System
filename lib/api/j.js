module.exports = {
    projectFrom: 'SELECT {{{ attr }}} FROM {{ table }}',
    projectWhereEqual: 'SELECT {{{ show_attr }}} FROM {{ tables }} WHERE {{{ condition_attr }}}="{{{ condition_attr_equals }}}"',
    joinTwo: 'SELECT {{{ show_attr }}} FROM {{ table1 }}, {{ table2 }} WHERE {{ table1 }}.{{{ attr_of_table1 }}}={{ table2 }}.{{{ attr_of_table2 }}}',
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
    aggFrom: 'SELECT {{{ agg_function }}}({{{ agg_over_attr }}}) FROM {{{ table }}}',
    nestedAggFrom: 'SELECT {{{ group_by }}}, {{{ agg_function }}}({{{ agg_over_attr }}}) FROM {{{ table }}} GROUP BY {{{ group_by }}}'
}