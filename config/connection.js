// required packages
const mysql = require('mysql');

console.log('Jawsdb url: ' + process.env.JAWSDB_URL)

// why wont my Jaws connection work?
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

  // if I enter my jaws DB info in here it works withough a problem
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Clear2020',
    database: 'burgers_db'
  });
}

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