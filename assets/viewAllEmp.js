require("console.table");
const db = require("../config/connection.js");

function viewAllEmployees() {
  const getAllEmp = `SELECT emp.id as Employee_ID,
  emp.first_name AS First_Name,
  emp.last_name AS Last_Name,
  department.dept_name AS Department,
  jobRole.salary AS Salary,
  jobRole.title AS Role,
  CONCAT(mgmt.first_name," ",mgmt.last_name) as Manager
FROM employee emp
LEFT JOIN employee mgmt
ON emp.manager_id = mgmt.id
INNER JOIN jobRole
ON emp.role_id = jobRole.id
LEFT JOIN department
ON jobRole.department_id = department.id
ORDER BY emp.id`;
  db.query(getAllEmp, (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      dataArray = rows;
      console.table("\n" + "\n");
      //console.log(dataArray);
      console.table(dataArray.slice(0));
      console.table("\n" + "\n");
    }
  });
}

module.exports = viewAllEmployees;
