var db = require("../models");
var authController = require('../controller/authcontroller.js');

module.exports = function(app,passport){
app.get('/', authController.welcome);

app.get('/signup', authController.signup);

app.get('/signin', authController.signin);

app.post('/signup', passport.authenticate('local-signup',
  { successRedirect: '/index',
    failureRedirect: '/signup',
    failureFlash : true // allow flash messages
    }
  ));

app.get('/index',isLoggedIn, authController.index);

app.get('/logout',authController.logout);

app.post('/signin', passport.authenticate('local-signin',
  { successRedirect: '/index',
    failureRedirect: '/signin',
    failureFlash : true
  }
  ));

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/signin');
}
}
