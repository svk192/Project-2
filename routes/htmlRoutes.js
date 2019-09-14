var db = require("../models");

module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.
  //signup page
  // app.get("/", function(req, res) {
  //   //res.send("Welcome to Passport with Sequelize");
  //   //res.sendFile(path.join(__dirname, "../SignUp.hbs"));
  //   res.render("SignUp");
  // });

  //load login
  app.get("/", function(req, res) {
    //res.send("Welcome to Passport with Sequelize");
    res.render("SignIn");
  });
//   app.get("/", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.render("index", {
//     //     msg: "Welcome!",
//     //     examples: dbExamples
//     //   });
//     // });
//   });

// load index page - no database call required
  app.get("/welcome", function(req, res) {
    res.render("index");
  });

  // Load top rated page - database call required 
  app.get("/top-rated", function(req, res) {
    getBook().then(function(response) {
      console.log(response)
    })
      res.render("results", );
  
  });

  // load lookup page - no database call required
  app.get("/lookup", function(req, res) {
    res.render("lookup");
  });

  // load results page - database call required
  app.get("/rate", function(req, res) {
    res.redner("results");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

getBook: function() {
  return $.ajax({
    url: "/topTest",
    type: "GET"
  });
}