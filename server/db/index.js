var mysql = require('mysql');
var Sequelize = require('sequelize');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var orm = new Sequelize('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

orm
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


var User = orm.define('users', {
  name: Sequelize.STRING
});

var Message = orm.define('messages', {
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
});
console.log('Message variable is this', Message);

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();


exports.User = User;
exports.Message = Message;

