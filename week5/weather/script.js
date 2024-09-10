function checkWeather() {
  let temp = document.querySelector("#temp");
  let body = document.querySelector("body");
  let outer = document.querySelector(".outer");
  let p = document.querySelector("p");
  console.log(temp.value);
  if (temp.value >= 40) {
    console.log("It is burning hot");
    body.style.backgroundColor = "crimson";
    outer.style.borderColor = "black";
    p.style.color = "black";
  } else if (temp.value < 40 && temp.value >= 30) {
    console.log("It is sunny and warm");
    body.style.backgroundColor = "limegreen";
  } else if (temp.value < 30 && temp.value >= 15) {
    console.log("it is pleasant weather");
    body.style.backgroundColor = "aqua";
  } else if (temp.value < 15) {
    console.log("it is chilly");
    body.style.backgroundColor = "grey";
  }
}
