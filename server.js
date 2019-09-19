require('dotenv').config()//Dependencies
const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const exphbs = require("express-handlebars");
const flash = require("connect-flash-plus");
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Using the flash middleware provided by connect-flash to store messages in session
 // and displaying in templates
app.use(flash());

app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    //cookie: { secure: true }
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
var authRoute = require("./routes/auth")(app, passport);
require("./config/passport/passport.js")(passport, db.user);

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

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