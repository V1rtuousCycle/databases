var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect();

connection.query('select * from messages', function (error, results, fields) {
  if (error) { throw error; }
  // console.log('The solution is: ', results[0].solution);
});

connection.end();

module.exports.connection = connection;