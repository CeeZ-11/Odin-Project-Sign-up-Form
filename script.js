document.getElementById("sign-up").addEventListener("submit", function (event) {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("conPass").value;
  var errorMessage = document.getElementById("error-message");

  if (password !== confirmPassword) {
    event.preventDefault();
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
});
