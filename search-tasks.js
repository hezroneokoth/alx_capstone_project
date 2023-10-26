#!/usr/bin/node

/* this function block starts the search process,
when the OK key is clicked */

document.getElementById('searchQuery').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchTasks();
    }
});

// The search tasks function
function searchTasks() {
    const searchQuery = document.getElementById('searchQuery').value.toLowerCase();
    const taskTabs = document.querySelectorAll('.task-tab');

    taskTabs.forEach(tab => {
        const taskName = tab.querySelector('.task-heading').textContent.toLowerCase();
        if (taskName.includes(searchQuery)) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    });
}