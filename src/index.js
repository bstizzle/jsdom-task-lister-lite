document.addEventListener("DOMContentLoaded", () => {
  // your code here

});

let newTask = event => {
  event.preventDefault();
  let task = document.createElement("li");
  task.innerText = document.getElementById("new-task-description").value;
}