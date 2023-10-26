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
const cssLink = document.querySelector("link[rel='stylesheet']");


let currentCssFile = "style.css";


button.addEventListener("click", () => {
this.classList.button('theme1')

//   if (currentCssFile === "style.css") {
//     cssLink.href = "day.css";
//     currentCssFile = "day.css";
//   } 
//   else {
//     cssLink.href = "style.css";
//     currentCssFile = "style.css";
//   }
})