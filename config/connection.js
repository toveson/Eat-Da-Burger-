//    * Inside the `connection.js` file, setup the code to connect Node to MySQL.

// required packages
const mysql = require('mysql');
const { promisify } = require('util');


// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
  connection = mysql.createConnection({
    host: 'r1bsyfx4gbowdsis.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'otkf86w0h073oy09',
    password: 'w00cacvl6v6u8la3',
    database: 'zy3y0dlby3ovk8zf'
  });
// };

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