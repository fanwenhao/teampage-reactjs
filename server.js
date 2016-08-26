var express = require('express');
var app = express();
var morgan = require('morgan'); // log requests to console
// var mongoose = require('mongoose'); // for mongodb if DB is necessary
// var database = require('./config/database');

// connect to mongoDB (or any other DB)
// mongoose.connect(database.url);
var fakeDB = [];

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // static file location
app.use(morgan('dev')); // log requests to console

// load routes
require('./routes')(app);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});