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

const vigelandCard = document.querySelector("#flip");

vigelandCard.addEventListener("mouseover", function () {
  document.body.style.backgroundImage =
    "url('https://vigeland.museum.no/imager/bilder/Gustav-Vigeland/589/standard_gustav-vigeland_d6249d1aefa7d35946ba52fa46420a7b.jpg')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
});
//makes the body background change to the artist of the current card when hovering.

vigelandCard.addEventListener("mouseout", function () {
  document.body.style.backgroundImage = "";
});
// Returns the body background to it's normal state when the user is no longer hovering the card
