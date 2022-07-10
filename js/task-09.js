function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
let text = document.querySelector(".color");
// console.log(body);

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  text.textContent = getRandomHexColor();
}

btn.addEventListener("click", changeColor);
