const db = require("../config/connection.js");

function viewAllEmpByMngr() {
  const viewEmpByMgr = `SELECT emp.id AS Employee_ID, emp.first_name AS EmpFirst_Name, emp.last_name AS EmpLast_Name, CONCAT(mgt.first_name, " ", mgt.last_name) AS Manager
  FROM employee emp, employee mgt
  WHERE mgt.id = emp.manager_id
  ORDER BY Manager ASC`;
  db.query(viewEmpByMgr, (err, rows) => {
    if (err) {
      console.log(err.message);
      return;
    } else {
      dataArray = rows;
      console.table("\n" + "\n");
      console.table(dataArray.slice(0));
      console.table("\n" + "\n");
    }
  });
}
module.exports = viewAllEmpByMngr;
