const inquirer = require("inquirer");
const db = require("../config/connection.js");

let deptArray = [];

//get data from department table
const getDeptTable = `SELECT department.id, department.dept_name FROM department`;
db.query(getDeptTable, (err, rows) => {
  if (err) {
    console.log(err.message);
  } else {
    deptArray = rows.map(({ id, dept_name }) => ({
      id: id,
      name: dept_name,
    }));
  }
});
function addNewRole() {
  //get responses for new Job Role
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the Job ID:",
        name: "jobID",
      },
      {
        type: "input",
        message: "Enter the Job Name: ",
        name: "jobName",
      },
      {
        type: "input",
        message: "Enter the Annual Salary: ",
        name: "salary",
      },
      {
        type: "list",
        pageSize: "10",
        message: "Select a department:",
        choices: deptArray.map((item) => item.id + " " + item.name),
        name: "dept",
      },
    ])
    .then((answers) => {
      //sql statement to insert new row to jobRole table
      const addNewJobRole = `INSERT INTO jobRole (id, title, salary, department_id) VALUES (?,?,?,?)`;

      //write answers to an array
      const vals = [
        answers.jobID,
        answers.jobName,
        answers.salary,
        answers.dept.split(" ")[0],
      ];

      db.query(addNewJobRole, vals, (err, resp) => {
        if (err) {
          console.log(err.message);
        } else if (resp) {
          console.log("Success! Your Txn was saved");
          console.log("\n" + "\n");
        }
      });
    });
}

module.exports = addNewRole;
