document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get the value of the input field
      const taskDescription = document.getElementById("new-task-description").value;
  
      // Create a new list item for the task
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;
  
      // Add the task to the task list
      taskList.appendChild(taskItem);
  
      // Clear the input field
      form.reset();
    });
  });
  