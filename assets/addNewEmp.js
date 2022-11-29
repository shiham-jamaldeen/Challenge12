const inquirer = require("inquirer");
const db = require("../config/connection.js");

function addNewEmp() {
  const getJobRoleList = `SELECT jobRole.id, jobRole.title FROM jobRole`;
  const getManagerList = `SELECT DISTINCT CONCAT (e.first_name," ", e.last_name) AS Manager FROM employee e employee m WHERE e.id = m.manager_id`;
}
module.exports = addNewEmp;
