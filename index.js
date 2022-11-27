//call libraries
const logo = require("asciiart-logo");
require("dotenv").config();
const inquirer = require("inquirer");
const db = require("./config/connection.js");

const viewAllDept = require("./assets/viewAllDept.js");
const viewAllEmp = require("./assets/viewAllEmp.js");
const viewAllEmpByDept = require("./assets/viewEmpByDept.js");

function splashScreen() {
  const longText1 = `*** SQL Challenge ***`;
  const longText2 = `** University of Adelaide Coding Bootcamp ***`;

  console.log(
    logo({
      name: "Employee Tracker",
      font: "Star Wars",
      lineChars: 10,
      padding: 2,
      margin: 3,
      logoColor: "yellow",
      borderColor: "blue",
      textColor: "blue",
    })
      .emptyLine()
      .right("Version 1.0")
      .emptyLine()
      .center(longText1)
      .emptyLine()
      .center(longText2)
      .render()
  );
  console.log("You are now logged on the " + process.env.DB_NAME + " database");
  console.log(" ");
  console.log(" ");
}
async function getUserOptions() {
  //variable to store the array of choices
  const userChoices = await inquirer.prompt({
    type: "list",
    message: "What would you like to do?",
    choices: ["View all departments", "View all job roles", "Quit"],
    name: "option",
  });
  if (userChoices.option === "View all departments") {
    viewAllDept();
    getUserOptions();
  } else if (userChoices.option === "Quit") {
    console.log("Good Bye");
    db.end();
  }
}
//main
splashScreen();
getUserOptions();
//call modules
//viewAllDept();
//viewAllRoles();
//viewAllEmp();

//viewAllEmpByDept();
