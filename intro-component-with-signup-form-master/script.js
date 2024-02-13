var form = document.querySelector("form");
var fNameInput = document.querySelector("#fName");
var lNameInput = document.querySelector("#lName");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();
});

const displayError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMsg");

  errorDisplay.innerText = message;
  inputControl.classList.add(".error");
};

const displaySuccess = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMsg");

  errorDisplay.innerText = "";
  inputControl.classList.remove(".error");
};

const emailCheck = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(String(email.toLowerCase()));
};

const validateForm`` = () => {
  var fName = fNameInput.value.trim();
  var lName = lNameInput.value.trim();
  var email = emailInput.value.trim();
  var password = passwordInput.value.trim();

  if (fName === "") {
    displayError(fName, "First Name cannot be empty");
  } else {
    displaySuccess(fName);
  }

  if (email === "") {
    displayError(email, "Email cannot be empty");
  } else if (!checkEmail(email)) {
    displayError(email, "Looks like this is not an email");
  } else {
    displaySuccess(email);
  }
};
