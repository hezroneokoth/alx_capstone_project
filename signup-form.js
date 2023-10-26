#!/usr/bin/node

// A js validation code for signup-form.html
document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents default form submission

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var emailAddress = document.getElementById('emailAddress').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var messageElement = document.getElementById('message');

    /* checks if any of the fields are empty
    or/and pass the included validations */
    if (firstName.trim() === '' || lastName.trim() === '' || emailAddress.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        messageElement.textContent = "Please fill in all the required fields.";
    } else if (password !== confirmPassword) {
        messageElement.textContent = "Passwords do not match.";
    } else {
        messageElement.textContent = "Sign up successful!";
    }
});