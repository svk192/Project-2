require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const passport = require("passport");
const session = require("express-session");
const flash = require('connect-flash');
const app = express();
const PORT = process.env.PORT || 3000;
//For express(includes BodyParser)
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

// For Passport
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);
// session secret
app.use(passport.initialize());
// persistent login sessions
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// For Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Express static assets
app.use(express.static("public"));
const models = require("./models");
///load passport strategies
app.use('/', require('./routes/index'));
app.use("/users", require("./routes/users"));
require("./config/passport.js")(passport, models.user);
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
//Sync Database 
models.sequelize
  .sync({ })
  .then(function() {
    console.log("Nice! Database looks fine");
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });
// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "development") {
  syncOptions.force = true;
}
app.listen(PORT, function(err) {
  if (!err) {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  } else {
    console.log(err);
  }
});

module.exports = app;
