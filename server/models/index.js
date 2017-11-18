var db = require('../db');
var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host     : '127.0.0.1',
//   user     : 'root',
//   password : '',
//   database : 'chat',
//   multipleStatements: true
// });

// connection.connect();

module.exports = {
  messages: {
    get: function (callback) {
      // a function which produces all the messages
      // var queryStr = `
      //  select users.name, messages.message, messages.roomname from
      //     messages left join users on users.user_id = messages.user_id;
      // `;
      // connection.query(queryStr, (err, results) => {
      //  callback(err, results);
      // });      
    }, 
    post: function (param, callback) {
      // function which can be used to insert a message into the database
    //  var queryStr = 'INSERT INTO `messages` (message, roomname, user_id) VALUES (?,?,(select user_id from users where name = ? limit 1))';
    //  connection.query(queryStr, param, (err, results) => {
    //          console.log('param', param);
    //          callback(err, results);
    //  });
    } 
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      // var queryStr = 'SELECT name FROM users';
      // connection.query(queryStr, (err, results) => {
      //  callback(err, results);
      // });
      // // gets a list of all users
    },
    post: function (param, callback) {  
      // var queryStr = 'insert ignore into `users` (name) values (?)';
      // connection.query(queryStr, param, (err, results) => {
      //   callback(err, results);
      // });
    }
  }
};

