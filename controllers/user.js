var User = require('../models/user');
var bodyParser = require('body-parser');

module.exports = function(app){

    //Find out what this does
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended:true }));

    



}