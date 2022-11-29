const db = require("../config/connection.js");
require("console.table");

//WHEN I choose to view all roles THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

function viewAllRoles() {
  const sql = `SELECT jobRole.id AS Job_ID, jobRole.title AS Job_Title, salary, department.dept_name AS Dept_Name FROM jobRole
  LEFT JOIN department ON (department.id = jobRole.department_id)
  ORDER BY department.dept_name`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log("**UNEXPECTED ERROR: Sorry your command be carried out**");
      console.log(err);
      return;
    } else if (rows) {
      dataArray = rows;
      console.table("\n" + "\n");
      console.table(dataArray.slice(1));
      console.table("\n" + "\n");
    }
  });
}
module.exports = viewAllRoles;
