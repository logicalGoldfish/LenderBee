var express = require('express');
var app = express();
var router = require('./config.js');
var logger = require('morgan');
var db = require('./db/db.js').db;
db();

app.set('port', process.env.PORT || 3000);

require('./config.js')(app, express);


// app.get('/', function(req, res){
//   res.render('../client/index.html');
// });

app.listen(app.get('port'), function(){
  console.log('localhost listening on :' + app.get('port') + ' Ctrl-C to terminate');
})
