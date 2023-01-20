const button = document.getElementById("toggleBtn");
const light = document.getElementById("light");

function toggleBtn() {
  button.classList.toggle("active");
  light.classList.toggle("on");

  console.log("we are here!");
}
