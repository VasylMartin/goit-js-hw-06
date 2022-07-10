const counter = document.querySelector("#value");
let counterValue = 0;
// const btns = document.querySelectorAll("button");
const btnD = document.querySelector('[data-action="decrement"]');
const btnI = document.querySelector('[data-action="increment"]');
// console.log(btns);

const clickDecrement = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

const clickIncrement = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

btnD.addEventListener("click", clickDecrement);
btnI.addEventListener("click", clickIncrement);
