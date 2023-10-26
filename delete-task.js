#!/usr/bin/node

/* this function block activates the deletion process,
when the delete-icon is clicked */

function deleteTask(event) {
    const taskTab = event.target.closest('.task-tab');
    const taskId = taskTab.dataset.taskId;

    // displays the confirmation dialogue
    function showConfirmationDialogue() {
        document.getElementById('confirmationDialogue').style.display = 'block';
    }

    // Function to hide the confirmation dialogue
    function hideConfirmationDialogue() {
        document.getElementById('confirmationDialogue').style.display = 'none';
    }

    // Event listener for the delete button
    document.getElementById('deleteButton').addEventListener('click', function() {
        showConfirmationDialogue();
    });

    // Event listener for the YES button
    document.getElementById('confirmYes').addEventListener('click', function() {
        hideConfirmationDialogue();
    });

    // Event listener for the NO button
    document.getElementById('confirmNo').addEventListener('click', function() {
        hideConfirmationDialogue();
    });


    // This block displays this confirmation dialogue
    const confirmed = window.confirm('Your task will be permanently deleted. Are you sure?');

    if (confirmed) {
        // User clicked 'OK' so proceed with deletion

        // requests the server to delete the task
        fetch(`/delete-task/${taskId}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was bad');
                }
                return response.json();
            })
            .then(data => {
                console.log('Task deleted!:', data);
                taskTab.remove();
            })
            .catch(error => {
                console.error('Error: Task not deleted:', error);
            });
    } else {
        // User clicked 'NO', so do nothing
        console.log('Deletion cancelled');
    }
}