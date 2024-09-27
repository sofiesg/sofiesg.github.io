const myMusic = document.querySelector("#my-music");
console.log(myMusic);

const playButton = document.querySelector("#play-btn");
console.log(playButton);

playButton.addEventListener("click", togglePlay);

const playImg = document.querySelector("#play-img");

function togglePlay() {
  if (myMusic.paused || myMusic.ended) {
    myMusic.play();
    playButton.style.backgroundColor = "#BDAAE6";
    playImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myMusic.pause();
    playButton.style.backgroundColor = "#ccccf3";
    playImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

const muteBtn = document.querySelector("#mute-btn");
console.log(muteBtn);

muteBtn.addEventListener("click", toggleSound);

const muteImg = document.querySelector("#mute-img");

function toggleSound() {
  if (myMusic.muted) {
    myMusic.muted = false;
    muteBtn.style.backgroundColor = "#ccccf3";
    muteImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    myMusic.muted = true;
    muteBtn.style.backgroundColor = "#BDAAE6";
    muteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}
// The mute and play buttons have a slight color change to further communicate the change.

myMusic.addEventListener("timeupdate", showProgress);

const progressBar = document.querySelector("#progress-bar-fill");
const videoTime = document.querySelector("#music-time");

function showProgress() {
  const currentTime = myMusic.currentTime;
  if (myMusic.duration) {
    videoTime.textContent = currentTime.toFixed(1);
    const progress = (currentTime / myMusic.duration) * 100;
    progressBar.style.width = progress + "%";
  }
}

const audio = [
  {
    name: "lofi",
    src: "lofi-music.mp3",
  },
  {
    name: "jazz",
    src: "jazz-music.mp3",
  },
  {
    name: "acoustic",
    src: "acoustic-music.mp3",
  },
];

const firstAudioBtn = document.querySelector("#first-song-btn");
console.log(firstAudioBtn);

const secondAudioBtn = document.querySelector("#second-song-btn");
console.log(secondAudioBtn);

const thirdAudioBtn = document.querySelector("#third-song-btn");
console.log(thirdAudioBtn);

firstAudioBtn.addEventListener("click", function () {
  chooseAudio(0);
});
secondAudioBtn.addEventListener("click", function () {
  chooseAudio(1);
});
thirdAudioBtn.addEventListener("click", function () {
  chooseAudio(2);
});

const audioName = document.querySelector("#song-name");

function chooseAudio(no) {
  myMusic.src = audio[no].src; // Corrected from myMusic.scr to myMusic.src
  audioName.textContent = audio[no].name;
  myMusic.load();
  myMusic.play();
}


// Dark mode toggle function
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
