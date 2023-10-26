#!/usr/bin/node

/* This block displays the new-task.html form,
when the user clicks the + icon on the main page */
document.addEventListener('DOMContentLoaded', function() {
    const createTaskIcon = document.getElementById('createTaskIcon');
    const createNew = document.getElementById('createNew');

    createTaskIcon.addEventListener('click', function() {
        createNew.style.display = 'block';
    });
});


// triggers the date input
function triggerDateInput() {
    const dueDateInput = document.getElementById('dueDate');
    dueDateInput.focus();
}


// A js validation code for new-task.html page
document.getElementById('createNew').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents default form submission

    var taskName = document.getElementById('taskName').value;
    var dueDate = document.getElementById('dueDate').value;
    var category = document.getElementById('category').value;
    var priority = document.getElementById('priority').value;
    var messageElement = document.getElementById('message');

    /* Check if any of the fields are empty
    or/and fulfill the included validations */
    if (taskName.trim() === '' || dueDate.trim() === '' || category.trim() === '' || priority.trim() === '') {
        messageElement.textContent = "Please fill in all the required fields.";
    } else {

        // Creates DATA object with user input
        var data = {
            taskName: taskName,
            dueDate: dueDate,
            category: category,
            priority: priority
        };

        // Creates OPTIONS object for the fetch request
        var options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        // Makes the fetch request
        fetch('/create-task', options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was bad');
                }
                return response.json();
            })
            .then(data => {
                console.log('New task created:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

        messageElement.textContent = "New task created!";
    }
});