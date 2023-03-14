const progressLink = document.getElementById("progress-link");

progressLink.addEventListener("click", function(event) {
  event.preventDefault(); // prevent the default behavior of following the link
  alert("In progress..."); // display the pop-up message
});
