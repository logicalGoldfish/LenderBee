var express = require('express');
var path = require('path');
var app = express();
var router = require('./config.js');
var logger = require('morgan');


console.log((path.join(__dirname, '../client')));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../client')));
app.set('port', process.env.PORT || 3000);

app.use('/', router);

// app.get('/', function(req, res){
//   res.render('../client/index.html');
// });

app.listen(app.get('port'), function(){
  console.log('localhost listening on :' + app.get('port') + ' Ctrl-C to terminate');
})
