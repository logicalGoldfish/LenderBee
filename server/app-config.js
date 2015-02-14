(function() {

  'use strict';
  var express = require('express');
  var router = express.Router();
  /* GET home page. */
  
  router.get('/', function(req, res) {
    console.log('got to get');
    res.render('../client/index.html');
  });

  module.exports = router;

}());
