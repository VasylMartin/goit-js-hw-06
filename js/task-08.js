const form = document.querySelector(".login-form");
form.addEventListener("submit", login);

function login(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

  const formData = {
    email: formEl.email.value,
    password: formEl.password.value,
  };
  console.log(formData);
  form.reset();

  if (email === "" || password === "") {
    alert("Empty form");
    form.reset();
    return;
  }
}
