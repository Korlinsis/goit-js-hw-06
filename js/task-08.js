const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заповніть всі поля форми!");
  }

  const submitResult = { email: email.value, password: password.value };
  console.log(submitResult);
  event.currentTarget.reset();
}
