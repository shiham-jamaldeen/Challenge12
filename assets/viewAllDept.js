require("console.table");

//WHEN I choose to view all departments THEN I am presented with a formatted table showing department names and department ids
const db = require("../config/connection.js");

function viewAllDept() {
  const sql = `SELECT id AS Dept_ID,dept_name AS Dept_Name FROM department ORDER BY id`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log("**UNEXPECTED ERROR: Sorry your command be carried out**");
      console.log(err);
      return;
    } else if (rows) {
      dataArray = rows;
      console.table(dataArray.slice(1));
    }
  });
}

module.exports = viewAllDept;
