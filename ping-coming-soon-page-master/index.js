function validateForm() {
  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("emailError");
  var email = emailInput.value.trim();

  // Regular expression for email validation
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Check if the email field is empty
  if (email === "") {
    emailError.textContent =
      "Whoops! It looks like you forgot to add your email";
    email;
    return false; // Prevent form submission
  }

  // Check if the email address is not formatted correctly
  if (!emailRegex.test(email)) {
    emailError.textContent = "Please provide a valid email address";
    emailInput.setAttribute(
      "title",
      "A valid email address should have the format 'name@host.tld'"
    );
    return false; // Prevent form submission
  }

  // Clear any previous error messages
  emailError.textContent = "";

  // Allow form submission if the email is valid
  return true;
}
