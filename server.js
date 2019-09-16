//require("dotenv").config();
//Dependencies
const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const exphbs = require("express-handlebars");
const flash = require('connect-flash');
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(flash());

app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
// persistent login sessions
app.use(passport.session());

// For Handlebars
app.engine("handlebars",exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


const PORT = process.env.PORT || 3500;

const db = require("./models");

// Express static assets
app.use(express.static("public"));


require('./routes/auth.js')(app, passport);
require("./routes/apiRoutes")(app, passport);
require("./routes/htmlRoutes")(app, passport);

require("./config/passport.js")(passport, db.user);

//Sync Database 
db.sequelize.sync({}).then(function() {
    console.log("Hurray! Database looks good");
  })
  .catch(function(err) {
    console.log(err, "Meh..Something went wrong with the Database!");
  });

if (process.env.NODE_ENV === "development") {
  syncOptions.force = true;
}
app.listen(PORT, function(err) {
  if (!err) {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,PORT
    );
  } else {
    console.log(err);
  }
});

module.exports = app;

// req.flash is the way to set flashdata using connect-flash