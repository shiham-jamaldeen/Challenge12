require("console.table");
const db = require("../config/connection.js");

function viewAllEmployees() {
  const sql = `SELECT a.id AS Emp_ID, a.first_name AS F_Name, a.last_name AS L_Name, jobRole.title AS Job_Title, jobRole.salary AS AnnualSalary, b.first_name AS Manager_Name, department.dept_name AS Department
  FROM employee a, employee b, jobRole, department 
  WHERE a.manager_id = b.id AND a.role_id = jobRole.id AND jobRole.department_id = department.id
  ORDER BY a.id`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log("**UNEXPECTED ERROR: Sorry your command be carried out**");
      console.log(err);
      return;
    } else {
      dataArray = rows;
      console.table("\n" + "\n");
      console.table(dataArray.slice(1));
      console.table("\n" + "\n");
    }
  });
}

module.exports = viewAllEmployees;
