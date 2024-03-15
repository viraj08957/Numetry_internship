const form = document.getElementById("form");
const password1Element = document.getElementById("password1");
const password2Element = document.getElementById("password2");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity();
  // In case of error update the message to user
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  // Check to see if Password and Repeat Passwords match
  if (password1Element.value === password2Element.value) {
    passwordsMatch = true;
    password1Element.style.borderColor = "green";
    password2Element.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match.";
    messageContainer.style.borderColor = "red";
    password1Element.style.borderColor = "red";
    password2Element.style.borderColor = "red";
    return;
  }
  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Do something with user data!
  console.log(user);
}

function processFormData(event) {
  event.preventDefault();
  // Validate Form
  validateForm();
  // Submit Data if valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

function sendMail() {
  const email = document.getElementById("email");
  let opt_val = Math.floor(Math.random() * 10000);
  let email_body = `<h2>Your OTP is ${otp_val}</h2>`;
  Email.send({
    SecureToken: " 8a02fb15-a8e5-4354-851a-507b46dfeeba",
    To: email.value,
    From: "virajraut089@gmail.com",
    Subject: "email otp uisng javascript",
    Body: email_body,
  }).then((message) => {
    if (message === "ok") {
      alert("OTP sent to your email " + email.value);
    }
  });
}

// Event Listener
form.addEventListener("submit", processFormData);

function sendotp() {
  let opt_val = Math.floor(Math.random() * 10000);
  return opt_val;
}

function forgotPassword() {
  var emailInput = document.getElementById("email").value;
  if (emailInput.trim() !== "") {
    alert("you reset otp send  " + sendotp());
  } else {
    var email = document.getElementById("email").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("please enter a valid email address .");
      return;
    }

    sendMail();

    alert("Please enter your email address");
  }
}

function isRegister() {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // prevent form submission

    var email = document.getElementById("email").value;
    var registeredEmails = ["virajraut089@gmail.com", "virajraut789@gmail.com"]; // List of registered emails

    if (registeredEmails.includes(email)) {
      alert("you are loging");
      // You can redirect the user to another page or perform any other action here
    } else {
      alert("you are not registered");
    }
  });
}
