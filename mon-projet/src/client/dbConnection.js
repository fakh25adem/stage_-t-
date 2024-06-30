const mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "adem123",
    database: "reclamer",
  
  })

module.exports = con;