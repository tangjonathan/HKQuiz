var Quiz = require('../models/quiz');
var bodyParser = require('body-parser');

module.exports = function(app)
{
    //Find out what this does
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended:true }));

    app.get('/quizzes', function(req, res){

        var quizzes = Quiz.find({}, function(err, quiz){
            if (err) throw err;
        });

        
        res.render('quiz/index', { quizzes:quizzes });

    });

    app.get('/quizzes/new', function(req, res){

        res.render('quiz/createUpdate');

    });

    app.post('/quizzes/new', function(req, res){
        if(req.body.id)
        {
            Quiz.findByIdandUpdate(req.body.id,
            {
                question: req.body.question,
                answer: req.body.answer
            }, function(err){
                if(err) throw err;

                res.send('Success');
            });
        }
        else{
            var newQuiz = Quiz({
                question :req.body.question,
                answer: req.body.answer
            });
            
            newQuiz.save(function(err){
                if(err) throw err;

                res.send('Success');
            })

        }
    });

    app.get('/quizzes/:id', function(req, res){

        Quiz.findById( req.params.id, function(err, foundQuiz){
            if (err) throw err;
            
            console.log(foundQuiz.id);
            res.render('quiz/show', {foundQuiz: foundQuiz});
        });

    });
}