$(document).ready(function() {

    $upvote = $(".upvote");


    All().then(function(res){

        addJquery(res)
        

    })

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

  

 function All () {
    return $.ajax({
      url: "api/All",
      type: "GET"
      //   data: JSON.stringify(data)
    })
 }

 function addJquery(res){

    var html1 =$('<div style="margin-top:80px;margin-right:100px">')
        res.forEach(function (item) {
            console.log(item); // key
            console.log(item.Count);
            console.log(item.Book.title);
            
        
                
    html1.append('<div class="card" >'+
       '<div class="row no-gutters">'+
        ' <div class="col-auto"> <img src=' +
        item.Book.Thumbnail + "'" + 'class="img-fluid" alt="" style="width:250px;height:300px"> </div>' 
        + '<div class="col">     <div class="card-block px-2">  <h5 class="bookTitle">'
       + item.Book.title + '</h5> <h6 class="bookAuthor">' + item.Book.author + 
       '</h6> <p class="bookPlot">' + item.Book.description
       + 
'</div><div class="d-flex justify-content-end "> <p id-votes='+ item.Count +'> > Votes: '+ item.Count + '<button type="button" class="btn btn-secondary upvote" data-number=' + item.Count+'>&#128077;</button> <button type="button" class="btn btn-secondary downvote">&#128078;</button></p></div></div>'
        )

        });

      $("#welcome").after(html1)
 }