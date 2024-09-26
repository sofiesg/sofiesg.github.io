const myMusic = document.querySelector("#my-music");
console.log(myMusic);

const playButton = document.querySelector("#play-btn");
console.log(playButton);

playButton.addEventListener("click", togglePlay);

const playImg = document.querySelector("#play-img");

function togglePlay() {
  if (myMusic.paused || myMusic.ended) {
    myMusic.play();
    playImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  } else {
    myMusic.pause();
    playImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  }
}

const muteBtn = document.querySelector("#mute-btn");
console.log(muteBtn);

muteBtn.addEventListener("click", toggleSound);

const muteImg = document.querySelector("#mute-img");

function toggleSound() {
  if (myMusic.muted) {
    myMusic.muted = false;
    muteBtn.style.backgroundColor = "d5cea3";
    muteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  } else {
    myMusic.muted = true;
    muteBtn.style.backgroundColor = "#8c886f";
    muteImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  }
}

myMusic.addEventListener("timeupdate", showProgress);

const progressBar = document.querySelector("#progress-bar-fill");
const songTime = document.querySelector("#music-time");

function showProgress() {
  const currentTime = myMusic.currentTime;
  //   console.log("current time", currentTime.toFixed(2));
  songTime.textContent = currentTime.toFixed(1);
  const progress = (currentTime / myMusic.duration) * 100;
  console.log("progress", progress.toFixed(2));
  //   progressBar.style.width = progress + "%";
}

// const myMusic = document.querySelector("#my-music");
// console.log(myMusic);

// const playButton = document.querySelector("#play-btn");
// console.log(playButton);

// playButton.addEventListener("click", togglePlay);

// const playImg = document.querySelector("#play-img");

// function togglePlay() {
//   if (myMusic.paused || myMusic.ended) {
//     myMusic.play();
//     playImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
//   } else {
//     myMusic.pause();
//     playImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
//   }
// }

// function toggleSound() {
//     if (myMusic.muted) {
//       myMusic.muted = false;
//       muteUnmuteBtn.style.backgroundColor = "d5cea3";
//       muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
//     } else {
//       myMusic.muted = true;
//       muteBtn.style.backgroundColor = "#8c886f";
//       muteImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
//     }
//   }

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
