const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulRef = document.querySelector("#ingredients");

const res = ingredients.map((el) => {
  const li = document.createElement("li");
  li.textContent = el;
  return li;
});

ulRef.append(...res);
