module.exports = {
    projectFrom: 'SELECT {{ attr }} FROM {{ table }}',
    projectFromWhere: 'SELECT {{ attr }} FROM {{ table }} WHERE {{ condition }}',
    cus2mem: 'SELECT ID MEMBERSHIP_ID FROM MEMBERSHIP WHERE CUSTOMER_ID="{{ customerId }}"',
    showAll: 'SELECT * FROM {{ table }}',
    countStaff: 'SELECT COUNT(*) FROM STAFF'
}