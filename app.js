var express = require('express');
var app = express();
var router = require('./server/config.js');
var logger = require('morgan');
var Sequelize = require('sequelize');
var db = require('./server/db/db.js');
var User = global.db.User;
var Item = global.db.Item;
var Message = global.db.Message;
var Notification = global.db.Notification;
var Review = global.db.Review;

console.log('USER:', User);

app.set('port', process.env.PORT || 3000);

require('./server/config.js')(app, express);

app.listen(app.get('port'), function(){
  console.log('localhost listening on :' + app.get('port') + ' Ctrl-C to terminate');
})

// Creates tables if they don't exist
User.sync().then(function() {
  Message.sync();
  Item.sync().then(function() {
    Notification.sync();
    Review.sync()
  });
})
