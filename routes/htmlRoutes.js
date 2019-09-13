const db = require("../models");

module.exports = function(app) {
app.get("/top-rated", function(req, res) {
  db.book.findOne({ where: { id: req.params.id } }).then(function(
    dbExample
    ) {
    res.render("results", {
    example: dbExample
      });
    });
  });

  // load rate page
  app.get("/lookup", function(req, res) {
    res.render("submit");
  });

  app.get("/rate", function(req, res) {});

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
