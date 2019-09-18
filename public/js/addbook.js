$(document).ready(function() {
  $BookButton = $(".BookButton");
  $upvote = $(".upvote");

  $BookButton.click(marked);
  $upvote.click(upvoted);

 });


 var API = {
  saveBook: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/addBook",
      data: JSON.stringify(example)
    });
  },
  saveUpVote: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/saveUpVote",
      data: JSON.stringify(example)
    });
  },
  getABook: function(example) {
    return $.ajax({
      url: "api/getABook/" + example,
      type: "GET"
      //   data: JSON.stringify(data)
    });
  },
  getBookID: function(example) {
    return $.ajax({
      url: "api/getBookID/" + example,
      type: "GET"
      //   data: JSON.stringify(data)
    });
  },
  getUserID: function(example) {
    return $.ajax({
      url: "api/getUserID/" + example,
      type: "GET"
      //   data: JSON.stringify(data)
    });
  },
 };

 function marked() {
  // define event handler
  var $this = $(this);
  var idname = $this.attr("data-idname");
  console.log(idname);
  // console.log("happy happy!");
  // console.log(Book);
  API.getABook(idname).then(function(data) {
    API.saveBook(data)
      .then(function(data) {
        console.log(data)
        $this.html("Book Added!");
        //   console.log(data);
      })
      .catch(function err(err) {
        console.log("Pepito made a mistake, please check" + err);
      });
    // console.log("userid"+ this.userid)
  }).catch(function(error){console.log("This error!!!" + error)});
}



function upvoted(){
  var $this = $(this);
  var bookId =$this.attr("data-bookid")
  var userBookdata = {}
  console.log("1235")
 API.getBookID(bookId).then(function(data){

  console.log(data) 
   userBookdata = {
     bookID: parseInt(data.book_Id),
     userID: 1
   }

   


   API.saveUpVote(userBookdata).then(function(res){
    console.log(res)

   })
   .catch(function(err){console.log(err)})
   })
.catch(function(error){console.log("This error!!!" + error)});
}