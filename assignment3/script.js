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

//-----------------------------------------
//change background to Edvard Munch's self portrait when hovering over the Scream painting card (glide-card-inner)

const munchDiv = document.querySelector(".glide-card-inner");
console.log(munchDiv);

munchDiv.addEventListener("mouseover", () => {
  document.body.classList.add("change-background-munch");
});

munchDiv.addEventListener("mouseout", () => {
  document.body.classList.remove("change-background-munch");
});

//---------------------------------------------------------
//Changes the background to a portrait of Christian Krohg when hovering over his painting card

const krohgDiv = document.querySelector(".flip-card-inner");
console.log(krohgDiv);

krohgDiv.addEventListener("mouseover", () => {
  document.body.classList.add("change-background-krohg");
});

krohgDiv.addEventListener("mouseout", () => {
  document.body.classList.remove("change-background-krohg");
});

// -----------------------------------------------------------
//Changes the background to a photo of Gustav Vigeland when hovering over his statue card
const vigelandDiv = document.querySelector(".open-card-outer");
console.log(krohgDiv);

vigelandDiv.addEventListener("mouseover", () => {
  document.body.classList.add("change-background-vigeland");
});

vigelandDiv.addEventListener("mouseout", () => {
  document.body.classList.remove("change-background-vigeland");
});

//----------------------------------------------------
//Changes the background to a photograph of Adolph Tideman & Hans Gude when hovering over their painting card
const tidemanDiv = document.querySelector(".out-card-inner");
console.log(krohgDiv);

tidemanDiv.addEventListener("mouseover", () => {
  document.body.classList.add("change-background-tideman");
});

tidemanDiv.addEventListener("mouseout", () => {
  document.body.classList.remove("change-background-tideman");
});
