// Add event listeners to the submit and delete buttons
$("#sign-up").on("click", function(event) {
  event.preventDefault();
  window.location.href = "/signup";
});
$("#sign-in-modal").on("click", function(event) {
  event.preventDefault();
  window.location.href = "/signin";
});
