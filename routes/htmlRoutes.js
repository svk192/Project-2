const axios = require("axios");
module.exports = function(app) {
  // Load top rated page - database call required 
  // app.get("/top-rated", function(req, res) {
  //   // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     axios
  //     .get('http://localhost:3500/topTest')
  //     .then(foundBooks => {
  //       res.render('searchResults', {books: foundBooks.data})})
  //     .catch(function err(err){ console.log('Pepito made a mistake, please check' + err)});
  //   // res.render('index');
  // });

  // load rate page 
  app.get("/lookup", function(req, res) {
    res.render("lookup");
  });
  //load results page
  app.post("/results", function(req, res) {
    var query = req.body.title;

    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + query)
      .then(function(response) {
        var books = response.data.items;
        // for (var i = 0; i < books.length; i++) {
         console.log(books[0].volumeInfo.title);
        var title = books[0].volumeInfo.title;
        var author = books[0].volumeInfo.authors;
        var plot = books[0].volumeInfo.description;
        var image = books[0].volumeInfo.imageLinks.smallThumbnail;
        res.render("searchResults", {books});
      });
  });


  app.get("/api/getABook/:id", function(req, res) {
    var query = req.params.id
    console.log(query)
    var Book = {
      title: "placeholder",
      author: "placeholder",
      description: "placeholder",
      ISBN_type: "placeholder",
      ISBN_ID: -1,
      category: "placeholder",
      smallThumbnail: "placeholder",
      Thumbnail: "placeholder",
      pageCount: "placeholder",
      APIID: query
    }
      
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + query+ "&max-results=5")
      .then(function(response) {
        var books = response.data.items;
        console.log(books)
        
          Book.title= books[0].volumeInfo.title,
          Book.author= books[0].volumeInfo.authors[0],
          Book.description= books[0].volumeInfo.description,
          Book.ISBN_type= books[0].volumeInfo.ISBN_type,
          Book.ISBN_ID= books[0].volumeInfo.ISBN_ID,
          Book.category= books[0].volumeInfo.category,
          Book.smallThumbnail= books[0].volumeInfo.imageLinks.smallThumbnail,
          Book.Thumbnail= books[0].volumeInfo.imageLinks.thumbnail,
          Book.pageCount= books[0].volumeInfo.pageCount,
        console.log(Book)
        //  console.log("Here in HTML: " + Book)
        res.send(Book)
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

//logout user
app.get('/logout', function(req, res) {
  req.session.destroy(function(err){
    req.logout();
    res.redirect('/');
  })
});
};