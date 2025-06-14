document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    document.querySelectorAll(".error").forEach((e) => {
      e.textContent = "";
      e.classList.remove("show");
    });

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!/^[A-Za-z]+$/.test(firstName)) {
      showError("firstNameError", "First name must contain letters only.");
      valid = false;
    }

    if (!/^[A-Za-z]+$/.test(lastName)) {
      showError("lastNameError", "Last name must contain letters only.");
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError("emailError", "Enter a valid email address.");
      valid = false;
    }

    if (!/^(\+251|0)?9\d{8}$/.test(phone)) {
      showError(
        "phoneError",
        "Enter a valid Ethiopian phone number (e.g. +2519xxxxxxxx or 09xxxxxxxx)."
      );
      valid = false;
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password)
    ) {
      showError(
        "passwordError",
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
      valid = false;
    }

    if (password !== confirmPassword) {
      showError("confirmPasswordError", "Passwords do not match.");
      valid = false;
    }

    if (valid) {
      const btn = document.querySelector("button");
      btn.classList.add("loading");
      btn.innerHTML = "Submitting...";
      setTimeout(() => {
        btn.classList.remove("loading");
        btn.innerHTML = "Submit";
        alert("Form submitted successfully!");
      }, 1500);
    }
  });

function showError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = message;
  errorElement.classList.add("show");
}

document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    togglePassword("password", this);
  });

document
  .getElementById("toggleConfirmPassword")
  .addEventListener("click", function () {
    togglePassword("confirmPassword", this);
  });

function togglePassword(fieldId, icon) {
  const field = document.getElementById(fieldId);
  field.type = field.type === "password" ? "text" : "password";
  icon.textContent = field.type === "password" ? "👁" : "🙈";
}
