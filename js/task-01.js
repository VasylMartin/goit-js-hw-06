const items = document.querySelectorAll(".item");
const list = items.length;
console.log("Number of categories:", list);
items.forEach(function (el) {
  const numberOfElements = el.querySelectorAll("li");
  const nameOfElements = el.querySelector("h2");
  console.log(`Category: ${nameOfElements.textContent}`);
  console.log(`Elements: ${numberOfElements.length}`);
});
