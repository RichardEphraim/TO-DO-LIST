// const tasks = document.querySelector("#tasks")
// const addTask = document.querySelector("#add")
// const addnew = document.querySelector("#new")

// function changeStyle(){
//     const newInput = document.createElement("li")
//     newInput.textContent = addnew.value
//     tasks.appendChild(newInput)
//     addnew.value = ""
// }

// addTask.addEventListener("click", changeStyle)
const button = document.querySelector(".theme");

button.addEventListener("click", () => {
  const cssLink = document.querySelector("link[rel='stylesheet']");
  cssLink.href = "day.css";
});