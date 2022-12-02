require("console.table");
const db = require("../config/connection.js");

//WHEN I choose to view all departments THEN I am presented with a formatted table showing department names and department ids

function viewAllDept() {
  const sql = `SELECT id AS Department_ID,dept_name AS Department_Name FROM department ORDER BY department.id asc`;
  db.query(sql, (err, rows) => {
    if (err) {
      //console.log("**UNEXPECTED ERROR: Sorry your command be carried out**");
      console.log(err);
      return;
    } else {
      dataArray = rows;
      console.table("\n" + "\n");
      console.table(dataArray.slice(0));
      console.table("\n" + "\n");
    }
  });
}

module.exports = viewAllDept;
