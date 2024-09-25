const myMusic = document.querySelector("#my-music");
console.log(myMusic);

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

const muteBtn = document.querySelector("#mute-btn");
console.log(muteBtn);

muteBtn.addEventListener("click", toggleSound);

const muteImg = document.querySelector("#mute-img");

function toggleSound() {
  if (myMusic.muted) {
    myMusic.muted = false;
    muteUnmuteBtn.style.backgroundColor = "d5cea3";
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  } else {
    myMusic.muted = true;
    muteBtn.style.backgroundColor = "#8c886f";
    muteImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  }
}
