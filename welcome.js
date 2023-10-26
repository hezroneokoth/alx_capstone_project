#!/usr/bin/node

// event listener for the welcome message
document.addEventListener('DOMContentLoaded', function() {
    fetch('/get_user_info')
        .then(response => response.json())
        .then(data => {
            const firstName = data.first_name;
            generateWelcome(firstName);
        });
});

// this block displays the welcome message in the class = "welcome"
function generateWelcome(firstName) {
    const welcomeElement = document.querySelector('.welcome');

    if (welcomeElement) {
        const welcomeHeader = document.createElement('h4');
        welcomeHeader.innerHTML = `<strong>Hi ${firstName}!</strong>`;

        const welcomeText = document.createElement('p');
        welcomeText.textContent = 'Have a nice day';

        welcomeElement.appendChild(welcomeHeader);
        welcomeElement.appendChild(welcomeText);
    }
}

// Hi Hayden!
// Have a nice day!