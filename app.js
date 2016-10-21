var express = require('express');
var session = require('express-session');
var app = express();
var flash = require('connect-flash');
var passport = require('passport');
var mongoose = require('mongoose');
var config = require('./config');
var quizController = require('./controllers/quizController');
var userController = require('./controllers/userController');
var sessionController = require('./controllers/sessionController');

require('./config/passport')(passport);

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use(session({secret:'mySession'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());
quizController(app);
userController(app);
sessionController(app);

app.listen(port);
