const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yeyen112233",
  database: "user",
});
module.exports = db;
