module.exports = {
    getCusMealByCoach: 'SELECT p.first_name, p.last_name, p.id, m.name, c.staff_id   FROM {{ table1 }} p, {{ table2 }} c, {{ table3 }} m, {{table4}} mc where mc.plan_id = m.id and mc.customer_id = p.id and mc.coach_id = c.staff_id and c.staff_id = "{{coach_ID}}" ',
    getFIInByMealPlan: 'SELECT fm.food_item, f.fat, f.carbs, f.protein, f.calories from food_item f, food_item_in_meal_plan fm, meal_plan m where fm.plan_id = m.id and fm.food_item = f.name and m.id = "{{meal_plan_ID}}"',
    getSessionByCoach: 'SELECT g.session_number, g.schedule, g.session_size, c.staff_id from gym_session g, coach c where g.coach_id = c.staff_id and c.staff_id = "{{coach_ID}}"',
    getSaledMemInfoBySalesID: 'SELECT m.data_joined, m.due_date, m.fee, s.id from sales s, membership m where s.id = m.sales_id and s.id = "{{sales_ID}}"',
    getModInfoByManagerID: 'SELECT m.description, m.membership_id from membership_modification m where m.manager = "{{manager_ID}}"',
    getMachinesByArea: 'SELECT a.area_size, a.name, m.description from machine_in_area m, area a where m.area_id = a.id and a.id = "{{area_ID}}"',
    getLockerwithCustomer: 'SELECT l.id, l.locker_size, l.customer_id, c.first_name, c.last_name from customer c inner join locker l on l.{{property}} = c.id',
    getCustSameSession: 'SELECT distinct c.id, c.first_name, c.last_name, c.DOB, c.email, c.gender, cr.description, cr.title from customer c, gym_session g, course cr, course_registration crg where g.course_id = cr.id and cr.id = crg.course_id and g.session_number = "{{session_number}}"',
    getProByMealPlan: 'SELECT mp.id, SUM(f.{{property}}) from food_item f, food_item_in_meal_plan fm, meal_plan mp where fm.food_item = f.name and mp.id = fm.plan_id and mp.id = "{{meal_plan_ID}}" group by mp.id',
    getNumofMachinesinArea: 'SELECT count(area_id) from machine_in_area where area_id ="{{areaID}}"',
    getAvgInFI: 'SELECT avg({{property}}) from food_item',
    getPropertyInFI: 'SELECT f.name, f.{{property}} from food_item f',
}