const inquirer = require("inquirer");
const db = require("../config/connection.js");

let employeeList = [];
let jobTitleList = [];

//get all employees query
const getEmpList = `SELECT employee.id, CONCAT (employee.first_name," ",employee.last_name) AS EmpName FROM employee`;
db.query(getEmpList, (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    employeeList = data.map(({ id, EmpName }) => ({
      id: id,
      name: EmpName,
    }));
  }
});
//get all job titles
const getJobRoleList = `SELECT jobRole.id, jobRole.title FROM jobRole`;
db.query(getJobRoleList, (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    jobTitleList = data.map(({ id, title }) => ({ id: id, name: title }));
  }
});

function updateEmpRole() {
  inquirer
    .prompt([
      {
        type: "list",
        pageSize: "25",
        message: "Which employee's role would you like to update?",
        choices: employeeList.map((item) => item.id + " " + item.name),
        name: "employeeName",
      },
      {
        type: "list",
        pageSize: "25",
        message:
          "Which role would you like to assign to the selected employee?",
        choices: jobTitleList.map((item) => item.id + " " + item.name),
        name: "employeeNewRole",
      },
    ])
    .then((answers) => {
      //check
      const values = [
        answers.employeeNewRole.split(" ")[0],
        answers.employeeName.split(" ")[0],
      ];
      //console.log(values);
      const updateRoleID = `UPDATE employee SET role_id = ? WHERE id = ?`;
      db.query(updateRoleID, values, (err, resp) => {
        if (err) {
          console.log("\n" + "\n");
          console.log(err.message);
        } else {
          console.log("\n" + "\n");
          console.log("Success! Transaction was saved");
          console.log("\n" + "\n");
        }
      });
    });
}
module.exports = updateEmpRole;
