const control = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function range(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}

control.addEventListener("input", range);
