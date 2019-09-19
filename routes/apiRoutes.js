var db = require("../models");
var sequelize = require("sequelize");
module.exports = function(app) {
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
  })

   app.get("/api/getBookID/:id", function(req, res) {
     
    db.Book.findOne({ where: { APIID: req.params.id }, attributes: ["book_Id"]}).then(function(dbExample) {
      console.log(dbExample.book_Id)
      res.json(dbExample);
    }); 

 });
 app.post("/api/addBook", function(req, res) {
   console.log("add book" + req.body);
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
 app.post("/api/saveUpVote", function(req, res) {
   console.log("add upvote " + req.body.userID);
   console.log("add user " + req.session.passport.user);
 

   db.userBook.create({
       userId: req.session.passport.user,
       BookBookId: req.body.bookID
   }).then(function(dbExample) {
     res.json(dbExample);
   });
 });

}