/*Database statements go here */
DROP DATABASE IF EXISTS EmployeeTracker_db;
DROP TABLE IF EXISTS department, jobRole, employee;

CREATE DATABASE IF NOT EXISTS EmployeeTracker_db;

USE EmployeeTracker_db;

/*Schema Statements go here */

/*Dept Table*/
CREATE TABLE department (
  id INT NOT NULL PRIMARY KEY,
  dept_name VARCHAR(30) NOT NULL
);
/*Role*/
CREATE TABLE jobRole (
  id INT NOT NULL PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL  
);
/*Employee*/
CREATE TABLE employee (
id INT NOT NULL  PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT, 
manager_id INT, 
FOREIGN KEY (role_id) REFERENCES jobRole(id) ON DELETE SET NULL,
FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL);
