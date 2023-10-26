#!/usr/bin/node

/* This block adds an event listener to the home icon
which redirects the user to the main page upon being clicked */
document.querySelector('.home-icon').addEventListener('click', function() {
    window.location.href = '/';
});


/* This block adds an event listener to the setting icon
which redirects the user to the settings page upon being clicked */
document.addEventListener('DOMContentLoaded', function() {
    var settingsIcon = document.getElementById('settingsIcon');

    settingsIcon.addEventListener('click', function() {
        window.location.href = '/settings';
    });
});