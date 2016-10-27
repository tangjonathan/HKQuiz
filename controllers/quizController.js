var Quiz = require('../models/quiz');
var bodyParser = require('body-parser');

module.exports = function(app)
{
    //Find out what this does
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended:true }));

    app.get('/quizzes', function(req, res){
        Quiz.find({}, function(err, quizzes){
            if (err) throw err;

            res.render('quiz/index', {quizzes:quizzes})
        });
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

                res.redirect('/quizzes');
            });
        }
        else{
            var newQuiz = Quiz({
                question: req.body.question,
                answer: req.body.answer
            });
            
            newQuiz.save(function(err){
                if(err) throw err;

                res.redirect('/quizzes');
            })

        }
    });

    app.get('/quizzes/:id', function(req, res){
        
        Quiz.findById(req.params.id, function(err, foundQuiz){
            if (err) throw err;
            
            res.render('quiz/show', {foundQuiz: foundQuiz});
        });

    });

    app.post('/quizzes/:id', function(req, res){
        var quiz = {}
        var
        req.user.id
        Quiz.findById(req.params.id, function(err, foundQuiz){
            var quiz = foundQuiz
            res.redirect('/quizzes')
        })
        

    }); //end of route
}

            // if (req.body.answer === foundQuiz.answer) {
            //     User.findByIdandUpdate(foundQuiz.userId,{$inc: {points:1}}, function(err, foundUser) {
            //         if (err) throw err;
            //             console.log(foundUser.points)
            //         res.redirect('/quizzes')
            //     })
            // }