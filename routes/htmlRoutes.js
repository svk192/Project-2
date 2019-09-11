// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // load login
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

  // load homepage
  app.get("/welcome", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

  // load rate a book page
  app.get("/top-rated", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/results.html"));
  });

  // load rate a book search page
  app.get("/rate", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/submit.html"));
  });

};
