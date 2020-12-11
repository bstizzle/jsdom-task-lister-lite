document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskForm = document.getElementById("create-task-form");

  taskForm.addEventListener("submit", newTask);

});

function newTask(event){
  event.preventDefault();
  let task = document.createElement("li");
  task.innerText = document.getElementById("new-task-description").value;

  addNewTask(task);
  event.target.reset();
};

function addNewTask(task){
  document.getElementById("tasks").appendChild(task);
};