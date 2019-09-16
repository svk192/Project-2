const db = require("../models");
const passport = require("passport");

module.exports = function(app) {
  app.get("/", function(req, res) {
    //res.send("Welcome to Passport with Sequelize");
    res.render("signup");
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
    res.render("results");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

//logout user
app.get('/logout', function(req, res) {
  req.session.destroy(function(err){
    req.logout();
    res.redirect('/');
  })
});
function getBook() {
  return $.ajax({
    url: "/topTest",
    type: "GET"
  });
}
};