const authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){
// Register Page
app.get('/register', authController.register);

// Login Page
app.get('/login', authController.login);

app.post('/register', passport.authenticate('local-signup',
  { successRedirect: '/index',
    failureRedirect: '/signup'}
  ));

app.get('/index',isLoggedIn, authController.index);

app.get('/logout',authController.logout);

app.post('/login', passport.authenticate('local-signin',
  { successRedirect: '/index',
    failureRedirect: '/login'}
  ));

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/login');
}


}


