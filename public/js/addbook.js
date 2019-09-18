$(document).ready(function() {
  $BookButton = $(".BookButton");

  function marked() {
    // define event handler
    var $this = $(this);
    var idname = $this.attr("data-idname");
    console.log(idname);

    console.log("happy happy!");
    // console.log(Book);

    API.getBook(idname).then(function(data) {
      API.saveBook(data)
        .then(function(data) {
          console.log(data)
          $this.html("Book Added!");
          //   console.log(data);
        })
        .catch(function err(err) {
          console.log("Pepito made a mistake, please check" + err);
        });
      console.log("userid"+ this.userid)
    }).catch(function(error){console.log("This error!!!" + error)});
  }

  $BookButton.click(marked);
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
  getBook: function(example) {
    return $.ajax({
      url: "api/getABook/" + example,
      type: "GET"
      //   data: JSON.stringify(data)
    });
  }
};
