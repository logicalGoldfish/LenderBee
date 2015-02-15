(function() {
  'use strict';

  var express = require('express');
  var path = require('path');
  var logger = require('morgan');
  var routes = require('./app-config');
  var app = express();

  app.use(logger('dev'));

  app.use(express.static(path.join(__dirname, '../client')));

  app.use('/', routes);

  app.set('port', process.env.PORT || 3000);

  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });

  module.exports = app;
}());