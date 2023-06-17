const form = document.querySelector(".login-form");
// const btn = document.querySelector('')

form.addEventListener("submit", handleSubmit);
function handleSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  const emailValue = email.value;
  const passwordValue = password.value;
  if (!emailValue || !passwordValue) {
    alert("All fields shouldn't be empty!!");
    return;
  }
  const data = {
    [email.name]: emailValue,
    [password.name]: passwordValue,
  };
  evt.currentTarget.reset()

  console.log(data);
}
