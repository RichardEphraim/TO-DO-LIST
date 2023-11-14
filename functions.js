const tasksInput = document.querySelector("#new");
const addTaskButton = document.querySelector(".button");
const itemWrapper = document.querySelector(".wrap");

addTaskButton.addEventListener("click", function() {
const newInput = tasksInput.value.trim();
if (newInput === "") {
alert("empty todo");
}
else {
itemWrapper.innerHTML += `<div id="tasks">
<div class="inputs">
    <input type="checkbox" id="todo">
    <label class="slash" for="todo"> ${newInput}</label>
</div>
<div>
    <button class="remove-btn"><i class="fa-solid fa-trash"></i></button>
</div>
</div>`;


const removeBtn = document.querySelectorAll(".remove-btn");

removeBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
        btn.parentNode.parentNode.remove()
      })
});


const slash = document.querySelectorAll('input[type="checkbox"]');
const label = document.querySelectorAll('.slash');

slash.forEach((checkbox, index) => {
    checkbox.addEventListener("click", () => {
        if (checkbox.checked) {
            label[index].classList.add("strike");
        } else {
            label[index].classList.remove("strike");
        }
    });
});

};

tasksInput.value = ""
}
);


