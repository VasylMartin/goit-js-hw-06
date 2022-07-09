const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
console.log(list);
const firstItem = document.createElement("li");
firstItem.textContent = ingredients[0];
firstItem.classList.add("item");
const secondItem = document.createElement("li");
secondItem.textContent = ingredients[1];
secondItem.classList.add("item");
const thirdItem = document.createElement("li");
thirdItem.textContent = ingredients[2];
thirdItem.classList.add("item");
const fourthItem = document.createElement("li");
fourthItem.textContent = ingredients[3];
fourthItem.classList.add("item");
const fivesItem = document.createElement("li");
fivesItem.textContent = ingredients[4];
fivesItem.classList.add("item");
const sixItem = document.createElement("li");
sixItem.textContent = ingredients[5];
sixItem.classList.add("item");

list.append(firstItem, secondItem, thirdItem, fourthItem, fivesItem, sixItem);
