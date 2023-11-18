// const tasksInput = document.querySelector("#new");
// const addTaskButton = document.querySelector(".button");
// const itemWrapper = document.querySelector(".wrap");

// const storedTask = JSON.parse(localStorage.getItem("tasks")) || [];

// storedTask.forEach(function(tasks){
// itemWrapper.innerHTML += `<div id="tasks">
// <div class="inputs">
//     <input type="checkbox" id="todo">
//     <label class="slash" for="todo"> ${tasks.name}</label>
// </div>
// <div>
//     <button class="remove-btn"><i class="fa-solid fa-trash"></i></button>
// </div>
// </div>`;

// });

// addTaskButton.addEventListener("click", function() {
// const newInput = tasksInput.value.trim();
// if (newInput === "") {
// alert("empty todo");
// }
// else {
// itemWrapper.innerHTML += `<div id="tasks">
// <div class="inputs">
//     <input type="checkbox" id="todo">
//     <label class="slash" for="todo"> ${newInput}</label>
// </div>
// <div>
//     <button class="remove-btn"><i class="fa-solid fa-trash"></i></button>
// </div>
// </div>`;

// storedTask.push({name:newInput})
// localStorage.setItem("tasks", JSON.stringify(storedTask))

// };

// tasksInput.value = ""
// }
// );


// const slash = document.querySelectorAll('input[type="checkbox"]');
// const label = document.querySelectorAll('.slash');

// slash.forEach((checkbox, index) => {
//     checkbox.addEventListener("click", () => {
//         if (checkbox.checked) {
//             label[index].classList.add("strike");
//         } else {
//             label[index].classList.remove("strike");
//         }
//     });
// });



// const removeBtn = document.querySelectorAll(".remove-btn");

// removeBtn.forEach((btn) => {
//     btn.addEventListener("click", function () {
//         btn.parentNode.parentNode.remove();

//         // Find the corresponding task in storedTask array
//         const taskNameToRemove = btn.parentNode.parentNode.querySelector('.slash').textContent;
//         const taskIndex = storedTask.findIndex(task => task.name === taskNameToRemove);

//         // Remove task from storedTask array
//         storedTask.splice(taskIndex, 1);

//         // Update localStorage
//         localStorage.setItem("tasks", JSON.stringify(storedTask));
//     });
// })
