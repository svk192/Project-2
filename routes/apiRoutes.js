var db = require("../models");
var sequelize = require("sequelize");
// var axios = require("axios");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Book.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.book.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/topTest", function(req, res) {
    db.userBook
      .findAll({
        include: [
          {
            model: db.Book,
            required: true
          }
        ],
        group: ["BookBookID"],
        attributes: [
          "BookBookID",
          [sequelize.fn("COUNT", "BookBookID"), "Count"]
        ]
      })
      .then(function(UserBook) {
        console.log("TopTest works");
        res.json(UserBook);
      });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.book.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/addBook", function(req, res) {
    console.log(req.body);
    db.Book.create({
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      ISBN_type: req.body.ISBN_type,
      ISBN_ID: req.body.ISBN_ID,
      pageCount: req.body.pageCount,
      category: req.body.category,
      smallThumbnail: req.body.smallThumbnail,
      Thumbnail: req.body.Thumbnail,
      APIID: req.body.APIID
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });


};
