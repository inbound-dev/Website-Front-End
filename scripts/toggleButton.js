//background
const backgroundText = new Array(
  document.getElementById("listItem1"),
  document.getElementById("listItem2"),
  document.getElementById("listItem3"),
  document.getElementById("header-title"),
  document.getElementById("header-text")
);

const background = document.getElementById("header");

var items = backgroundText.length - 1;

//light
const button = document.getElementById("toggleBtn");
const light = document.getElementById("light");

function toggleBtn() {
  // activates the light and changes button color
  button.classList.toggle("active");
  light.classList.toggle("on");

  //one at a time set text item(s) color to black
  for (let i = 0; i <= items; i++) {
    backgroundText[i].classList.toggle("activeTextBackground");
  }

  //change the background white

  background.classList.toggle("activeBackgroundColor");

  console.log("here");
}
