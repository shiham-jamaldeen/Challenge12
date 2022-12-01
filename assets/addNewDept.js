const inquirer = require("inquirer");
const db = require("../config/connection.js");
require("dotenv").config();

async function addNewDept() {
  console.log("**ADD NEW DEPARTMENT**");
  const val = await inquirer.prompt([
    { type: "input", name: "deptID", message: "Enter Dept ID:" },
    { type: "input", name: "deptName", message: "Enter Dept Name: " },
  ]);
  const sql = `INSERT INTO department (department.id, department.dept_name) VALUES (?,?)`;

  db.query(sql, [val.deptID, val.deptName], (err, resp) => {
    if (err) {
      console.log("\n" + "\n");
      console.log(err.message);
    } else {
      console.log("\n" + "\n");
      console.log(
        "Success! your data was saved to " + process.env.DB_NAME + " database"
      );
      console.log("\n" + "\n");
    }
  });
}
module.exports = addNewDept;
