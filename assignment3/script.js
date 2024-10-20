const slides = document.querySelectorAll(".slides");
console.log(slides);

// const slidesContainer = document.querySelector("#slides-container");
// console.log(slidesContainer);

let slideIndex = 0;
let distance = 0;

// add lcick events to navigate buttons
const prevButton = document.querySelector("#prev-button");
console.log(prevButton);
prevButton.addEventListener("click", gotoPrevious);
function gotoPrevious() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1;
  }
  distance = slides[slideIndex].offsetLeft;
  console.log(distance);
  window.scrollTo({ left: distance, behavior: "smooth" });
}

const nextButton = document.querySelector("#next-button");
console.log(nextButton);
nextButton.addEventListener("click", gotoNext);
function gotoNext() {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  distance = slides[slideIndex].offsetLeft;
  console.log(distance);
  window.scrollTo({ left: distance, behavior: "smooth" });
}

const cardMunch = document.querySelector("#cover");

cardMunch.addEventListener("mouseover", function () {
  document.body.style.backgroundImage = "url('munch.jpg')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
});

cardMunch.addEventListener("mouseout", function () {
  document.body.style.backgroundImage = "none"; // Reverts back to the original background
});

// element.onmouseover=change();
// element.onmouseout=change();
// function change(){
// element.classList.toggle("hover");
// }

// ---------------------------------------

// function backgroundMode() {
//     var element = document.body;
//     element.classList.hover("artist-mode");
//     var x = document.getElementById("cover");
//     if (x.innerHTML === "Light mode") {
//       x.innerHTML = "Dark mode";
//     } else {
//       x.innerHTML = "Light mode";
//     }
//   }
