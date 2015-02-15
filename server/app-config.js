(function() {

  'use strict';
  var express = require('express');
  var router = express.Router();
  /* GET home page. */
  
  router.get('/', function(req, res) {
    console.log('sending index.html to client');
    res.render('../client/dist/index.html');
  });

  module.exports = router;

}());
