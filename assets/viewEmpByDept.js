require("console.table");

//call external files
const db = require("../config/connection.js");

function viewAllEmpByDept() {
  const sql = `SELECT employee.id, employee.first_name, employee.last_name, jobRole.title AS JobTitle, department.dept_name AS department
      FROM employee
      LEFT JOIN jobRole ON (jobRole.id = employee.role_id)
      LEFT JOIN department ON (department.id = jobRole.department_id)
      ORDER BY jobRole.title`;
  db.query(sql, (err, rows) => {
    if (rows) {
      dataArray = rows;
      console.table(dataArray.slice(1));
      return rows;
    }
  });
}
module.exports = viewAllEmpByDept;