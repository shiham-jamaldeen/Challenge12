const mysql2 = require("mysql2");
require("dotenv").config();

try {
  const connection = mysql2.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  module.exports = connection;
} catch (err) {
  console.log("Sorry there is a problem connecting to the database");
  console.log(err);
}
