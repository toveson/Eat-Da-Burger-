//    * Inside the `connection.js` file, setup the code to connect Node to MySQL.

// required packages
const mysql = require('mysql');
const { promisify } = require('util');


if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Clear2020',
    database: 'burgers_db'
  });
};

// Making a connection.
connection.connect(function (error) {
  if (error) {
    console.error("error connecting: " + error.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);

});

//    * Export the connection.
module.exports = connection;