var models = require('../models');
var parser = require('body-parser');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) { throw err; }
        console.log('get messages', results);
        res.end(JSON.stringify(results));
        
      });
     
      // models.messages.get(function() {

      // });
      // a function which handles a get request for all messages
    }, 
    post: function (req, res) {
      var infoz = req.body;
      console.log(infoz);

      var params = [req.body.text, req.body.roomname, req.body.username];

      models.messages.post(params, function(err, results) {
        if (err) { throw err; }
        res.sendStatus(201);
        res.end(JSON.stringify(results));
        // statusCode
        // response
      });
      // a function which handles posting a message to the database
    },
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) { console.log('get error; ', err); }
        var mappedNames = [];
        results.map((result) => {
          // console.log('map result.name: ', result.name);
          mappedNames.push(result.name);
        });
        // console.log('get results', mappedNames);        
        res.end(JSON.stringify(mappedNames));
      });
    },
    post: function (req, res) {
      var infozUser = req.body;
      console.log(infozUser.username);
      models.users.post(infozUser.username, function(err, results) {
        if (err) { throw err; }
        res.sendStatus(201);
        res.end(JSON.stringify(results));
        // statusCode
        // response
      });
    },
  }
};

