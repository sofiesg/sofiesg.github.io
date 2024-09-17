const notify = document.querySelector("#notify");
console.log(notify);
// notify.play(); autoplays

const playButton = document.querySelector("#play-button");
console.log(playButton);
playButton.addEventListener("click", playAudio);
function playAudio() {
  notify.play();
}
