const inquirer = require("inquirer");
const db = require("../config/connection.js");
//global variable
let jobTitleList = [];
let managerList = [];
//get All Job Roles
const getJobRoleList = `SELECT jobRole.id, jobRole.title FROM jobRole`;
db.query(getJobRoleList, (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    jobTitleList = data.map(({ id, title }) => ({ id: id, name: title }));
  }
});
//get all managers
const getManagerList = `SELECT DISTINCT CONCAT (e.first_name," ", e.last_name) AS manager, m.manager_id FROM employee e, employee m WHERE e.id = m.manager_id`;
db.query(getManagerList, (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    managerList = data.map(({ manager_id, manager }) => ({
      id: manager_id,
      name: manager,
    }));
  }
});
function addNewEmp() {
  console.log("Enter Employee Data");
  console.log("*******************");

  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's id?",
        name: "empID",
      },
      {
        type: "input",
        message: "What is the employee's first name?",
        name: "empFName",
      },
      {
        type: "input",
        message: "What is the employee's last name?",
        name: "empLName",
      },
      {
        type: "list",
        pageSize: "25",
        message: "What is the employee's role?",
        choices: jobTitleList.map((item) => item.id + " " + item.name),
        name: "titleList",
      },
      {
        type: "list",
        pageSize: "10",
        message: "Who is the employee's manager?",
        choices: managerList.map((item) => item.id + " " + item.name),
        name: "mgrList",
      },
    ])
    .then((answers) => {
      //get all answers to an array
      const finalArray = [
        answers.empID,
        answers.empFName,
        answers.empLName,
        answers.titleList.split(" ")[0],
        answers.mgrList.split(" ")[0],
      ];
      //write items to database
      const newEmp = `INSERT INTO employee (id,first_name,last_name,role_id,manager_id) VALUES(?,?,?,?,?)`;
      db.query(newEmp, finalArray, (err, resp) => {
        if (err) {
          console.log("\n" + "\n");
          console.log(err.message);
        } else {
          db.commit();
          console.log("\n" + "\n");
          console.log(
            "Success! your data was saved to " +
              process.env.DB_NAME +
              " database"
          );
          console.log("\n" + "\n");
        }
      });
    });
}

module.exports = addNewEmp;
