const tasks = document.querySelector("#tasks");
const newTaskInput = document.querySelector("#new");
const addTaskButton = document.querySelector("#add")

addTaskButton.addEventListener("click", function() {
const newTaskItem = document.createElement("li");
newTaskItem.textContent = newTaskInput.value;
tasks.appendChild(newTaskItem);
newTaskInput.value = "";

}

)