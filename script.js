const tasks = document.querySelector("#tasks")
const addTask = document.querySelector("#add")
const addnew = document.querySelector("#new")

addTask.addEventListener("click", function(){
    const newInput = document.createElement("li")
    newInput.textContent = addnew.value
    tasks.appendChild(newInput)
    addnew.value = ""
})