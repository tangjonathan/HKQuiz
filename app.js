var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var quizController = require('./controllers/quiz');
var userController = require('./controllers/user');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());
quizController(app);
userController(app);

app.listen(port);
