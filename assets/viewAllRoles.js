require("console.table");
const db = require("../config/connection.js");

//WHEN I choose to view all roles THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

function viewAllRoles() {
  const sql = `SELECT id AS Dept_ID,dept_name AS Dept_Name FROM department`;
  db.query(sql, (err, rows) => {
    if (rows) {
      dataArray = rows;
      console.table(dataArray.slice(1));
    }
  });
}
module.exports = viewAllRoles;
