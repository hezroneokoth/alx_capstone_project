#!/usr/bin/node

// triggers the edit action when edit icon is clicked
function editTask(event) {
    const taskTab = event.target.closest('.task-tab');
    const taskHeading = taskTab.querySelector('.task-heading').textContent;
    window.location.href = `/edit-task.html?task=${encodeURIComponent(taskHeading)}`;
}

// triggers the date input
function triggerDateInput() {
    const dueDateInput = document.getElementById('dueDate');
    dueDateInput.focus();
}


// A js validation code for edit-task.html page
document.getElementById('editTask').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents default form submission

    var taskId = document.getElementById('taskId').value;
    var taskName = document.getElementById('taskName').value;
    var dueDate = document.getElementById('dueDate').value;
    var category = document.getElementById('category').value;
    var priority = document.getElementById('priority').value;
    var messageElement = document.getElementById('message');

    /* Checks if any of the fields are empty
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
        fetch(`/edit-task/${taskId}`, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was bad');
                }
                return response.json();
            })
            .then(data => {
                console.log('Task updated:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

        messageElement.textContent = "Task updated!";
    }
});