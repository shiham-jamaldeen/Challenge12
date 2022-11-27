require("console.table");

//call external files
const db = require("../config/connection.js");

function viewAllEmployees() {
  const sql = `SELECT employee.id AS Emp_ID, employee.first_name AS F_Name, employee.last_name AS L_Name, role_id AS Job_Title_ID
  FROM employee
ORDER BY employee.id`;
  db.query(sql, (err, rows) => {
    if (rows) {
      dataArray = rows;
      console.table(dataArray.slice(1));
    }
  });
}

module.exports = viewAllEmployees;
