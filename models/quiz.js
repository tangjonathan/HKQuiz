var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var quizSchema = new Schema({
    question: String,
    answer: String,
    UserId: String
});


var Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;