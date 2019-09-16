// // API call to grab book title
// $(function() {
//     $("#addBook").on("click", function(event) {
//         event.preventDefault();
//         if ($("#inputTitle").val().trim() === "") {
//             alert("Please enter a book title!");
//         }
//         else {
//             console.log("you entered a book title!")
//             let book = {
//                 book_name: $('#inputTitle').val().trim()
//             };
//             // console.log(Books);
//             let currentURL = window.location.origin;
//             $.post(currentURL + '/api/book', book)
//             .then(function (data) {
//             console.log(data);
//             location.reload();
//             });
//         };
//     });
// }) 

