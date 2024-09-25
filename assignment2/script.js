function colorMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var x = document.getElementById("mode-text");
  if (x.innerHTML === "Light mode") {
    x.innerHTML = "Dark mode";
  } else {
    x.innerHTML = "Light mode";
  }
}
// added dark mode to meet users' different needs and make the site more
// comfortable for late night use when studying. I have not made the dark mode
// standard as a light background is usually better for readability.
