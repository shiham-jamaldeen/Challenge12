//call libraries
const logo = require("asciiart-logo");
const inquirer = require("inquirer");

//call all modules
const viewAllDept = require("./assets/viewAllDept.js");
const viewAllRoles = require("./assets/viewAllRoles.js");
const viewAllEmp = require("./assets/viewAllEmp.js");
const addNewDept = require("./assets/addNewDept.js");
const addNewRole = require("./assets/addNewRole.js");
const addNewEmp = require("./assets/addNewEmp.js");
const updateEmpRole = require("./assets/updateEmpRole.js");
const viewAllEmpByDept = require("./assets/viewEmpByDept.js");
const viewAllEmpByMngr = require("./assets/viewAllEmpByMngr.js");

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
      borderColor: "green",
      textColor: "green",
    })
      .emptyLine()
      .right("Version 1.0")
      .emptyLine()
      .center(longText1)
      .emptyLine()
      .center(longText2)
      .render()
  );
  console.log(
    "You are now logged on to the " + process.env.DB_NAME + " database"
  );
  console.log("\n" + "\n");
}
async function getUserOptions() {
  const userChoices = await inquirer.prompt({
    type: "list",
    pageSize: "15",
    message: "Select an option from the following:",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Bonus: View all employees by department",
      "Bonus: View all employees by manager",
      "Add department",
      "Add role",
      "Add employee",
      "Update employee role",
      "Quit",
    ],
    name: "option",
  });
  switch (userChoices.option) {
    case "View all departments":
      //call function to view all depts
      viewAllDept();
      //call the getUserOptions function, with a timeout to prevent the screen contents being overwritten
      setTimeout(getUserOptions, 5000);
      break;
    case "View all roles":
      viewAllRoles();
      //call the getUserOptions function, with a timeout to prevent the screen contents being overwritten
      setTimeout(getUserOptions, 5000);
      break;
    case "View all employees":
      viewAllEmp();
      //call the getUserOptions function, with a timeout to prevent the screen contents being overwritten
      setTimeout(getUserOptions, 5000);
      break;
    case "Bonus: View all employees by department":
      viewAllEmpByDept();
      //call the getUserOptions function, with a timeout to prevent the screen contents being overwritten
      setTimeout(getUserOptions, 5000);
      break;
    case "Bonus: View all employees by manager":
      viewAllEmpByMngr();
      //call the getUserOptions function, with a timeout to prevent the screen contents being overwritten
      setTimeout(getUserOptions, 5000);
      break;
    case "Add department":
      addNewDept();
      setTimeout(getUserOptions, 10000);
      break;
    case "Add role":
      addNewRole();
      setTimeout(getUserOptions, 20000);
      break;
    case "Add employee":
      addNewEmp();
      setTimeout(getUserOptions, 25000);
      break;
    case "Update employee role":
      updateEmpRole();
      setTimeout(getUserOptions, 25000);
      break;
    case "Quit":
      console.log("\n" + "\n");
      console.log("Thank you for using Employee Tracker. Good Bye!");
      process.exit();
  }
}

//main
splashScreen();
getUserOptions();
