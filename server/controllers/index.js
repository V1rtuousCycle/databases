var models = require('../models');

var db = require('../db');

var userFields = ['username'];
var messageFields = ['message', 'username', 'roomname'];

module.exports = {
  messages: {
    get: function(req, res) {
      // db.Message.findAll({ include: [User] })
      // .complete(function(err, results) {
      //   res.json(results);
      // });
    },
    post: function(req, res) {
      //  db.User.findOrCreate({username: req.body[username]})
      //    .complete(function(err, user) {
      //      var params = {
      //        text: req.body[text],
      //        userid: user.id,
      //        roomname: req.body[roomname]
      //      };
      //    db.Message.create(params)
      //      .complete(function(err, results) {
      //        res.sendStatus(201);
      //      });
      //    });
      // }
    },
  },
  users: {
    get: function(req, res) {
      db.User.findAll()
        .complete(function(err, results) {
          res.json(results);
        });
    },
    post: function(req, res) {
    //   db.User.create({username: req.body[username]})
    //     .complete(function(err, user){
    //       res.sendStatus(201);
    //     });
    //   }
    },
  }
};