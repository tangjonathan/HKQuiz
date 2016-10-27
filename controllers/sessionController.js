var passport = require('passport');

module.exports = function(app)
{

app.get('/signup', function(req, res) {

    res.render('../views/session/signup',{ message : req.flash('signupMessage') });
});

app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/quizzes', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

 app.get('/login', function(req, res) {
     res.render('../views/session/login', { message: req.flash('loginMessage') });
 });

app.post('/login', passport.authenticate('local-login', { failureRedirect: '/login'}), function(req, res) {
     req.session.user = req.user;
     res.redirect('/quizzes');
  }
);

app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

app.get('/',function(req, res) {
        res.redirect('/login');
})

}