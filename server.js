require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var passport = require("passport");
var session = require("express-session");
var app = express();
var PORT = process.env.PORT || 3000;
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

// For Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

//Models
var models = require("./models");

// Express static assets
app.use(express.static("public"));

// Routes
var authRoute = require("./routes/auth")(app);
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//load passport strategies
require("./app/config")(passport, models.user);

//Sync Database
models.sequelize
  .sync()
  .then(function() {
    console.log("Nice! Database looks fine");
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });
// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
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
