const db = require("../models");

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

// load index page
  app.get("/welcome", function(req, res) {
    res.render("index");
  });

  // Load top rated page
  app.get("/top-rated", function(req, res) {
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("results");
    //     example: dbExample
    //   });
    // });
  });

  // load rate page
  app.get("/lookup", function(req, res) {
    res.render("lookup");
  });

  app.get("/rate", function(req, res) {});

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
