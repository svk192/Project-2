var db = require("../models");
var sequelize = require("sequelize")

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/topTest", function(req, res) {
  db.userBook.findAll({
   include: [
     {
       model: db.Book,
       required: true
     }],
    group: ["BookBookID"],
    attributes: ["BookBookID", [sequelize.fn("COUNT", "BookBookID"), "Count"]]
  }).then(function(UserBook) {
    console.log(UserBook);
    res.json(UserBook);
  });
});

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
