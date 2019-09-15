var db = require("../models");

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
// app.use(bodyParser.json());
app.use(express.urlencoded());
var axios = require("axios");
app.use(bodyParser.urlencoded({ extended: false }));
var sequelize = require("sequelize");
// import axios from 'axios';


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

  // Load top rated page - database call required 
  app.get("/top-rated", function(req, res) {
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      axios
      .get('http://localhost:3000/topTest')
      .then(foundBooks => {console.log(foundBooks.data)
        res.render('results', {books: foundBooks.data})})
      .catch(function err(err){ console.log('Pepito made a mistake, please check' + err)});
    // res.render('index');
  });

  // load rate page 

  app.get("/lookup", function(req, res) {
    res.render("lookup");
  });
  //load results page
  app.post("/results", function(req, res) {
    // console.log("title:" + req.body.title);
    // console.log("test");
    // console.log(req.body.title);
    var query = req.body.title;

    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + query)
      .then(function(response) {
        var books = response.data.items;
        // for (var i = 0; i < books.length; i++) {
        // console.log(books[0].volumeInfo.title);
        var title = books[0].volumeInfo.title;
        var author = books[0].volumeInfo.authors;
        var plot = books[0].volumeInfo.description;
        var image = books[0].volumeInfo.imageLinks.smallThumbnail;
        // for (var i = 0; i < books.length; i++) {
        //   console.log("bookTitle:" + books[i].volumeInfo.title);
        //   console.log("authors:" + books[i].volumeInfo.authors);
        //   console.log("description:" + books[i].volumeInfo.description);
        //   console.log("image:" + books[i].volumeInfo.imageLinks.smallThumbnail);
        console.log(books)
        res.render("searchResults", {
          books
        });
        // }
      });
  });

  // load results page - database call required
  app.get("/rate", function(req, res) {

    res.render("rate");

  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
