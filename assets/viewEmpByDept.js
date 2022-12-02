const db = require("../config/connection.js");

function viewAllEmpByDept() {
  const viewEmpByDept = `SELECT employee.id, employee.first_name, employee.last_name, jobRole.title AS JobTitle, department.dept_name AS department
      FROM employee
      LEFT JOIN jobRole ON (jobRole.id = employee.role_id)
      LEFT JOIN department ON (department.id = jobRole.department_id)
      ORDER BY department.dept_name ASC`;
  db.query(viewEmpByDept, (err, rows) => {
    if (err) {
      console.log(err.message);
      return;
    } else {
      dataArray = rows;
      console.table("\n" + "\n");
      console.table(dataArray.slice(0));
      console.table("\n" + "\n");
    }
  });
}
module.exports = viewAllEmpByDept;
