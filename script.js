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
const vigelandDiv = document.querySelector(".open-card-inner");
console.log(krohgDiv);

vigelandDiv.addEventListener("mouseover", () => {
  document.body.classList.add("change-background-vigeland");
});

vigelandDiv.addEventListener("mouseout", () => {
  document.body.classList.remove("change-background-vigeland");
});

//----------------------------------------------------
//Changes the background to a photograph of Adolph Tideman & Hans Gude when hovering over their painting card
const tidemanDiv = document.querySelector(".cover-card-inner");
console.log(krohgDiv);

tidemanDiv.addEventListener("mouseover", () => {
  document.body.classList.add("change-background-tideman");
});

tidemanDiv.addEventListener("mouseout", () => {
  document.body.classList.remove("change-background-tideman");
});
