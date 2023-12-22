const newInput = document.querySelector("#new");
const submitInput = document.querySelector(".button");
const todoContent = document.querySelector(".wrap");
const completedTask = document.querySelector("#count1");
const totalTask = document.querySelector("#count2");
const remainingTask = document.querySelector("#count3");
const wrap = document.querySelector(".wrap");

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

submitInput.addEventListener('click', (e) => {
  e.preventDefault();
  const inputValue = newInput.value.trim();

  if (inputValue === "") {
    alert("Please Input a Task");
    return;
  }

  const task = {
    id: Date.now(),
    name: inputValue,
    isCompleted: false,
  };

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  createTask(task);
  newInput.value = "";
});

if (localStorage.getItem('tasks')) {
  tasks.map((task) => {
    createTask(task);
  });
}

function createTask(task) {
  const taskEl = document.createElement("div");

  taskEl.setAttribute("id", task.id);

  if (task.isCompleted) {
    taskEl.classList.add('slash');
  }

  const taskElMarkup = `
    <div id="tasks">
      <div class="inputs ${task.isCompleted ? 'slash' : ''}"> <input type="checkbox" class="radioinput" id="${task.id}" ${task.isCompleted ? 'checked' : ''}>
        <label for="${task.id}" ${task.isCompleted ? '' : 'contenteditable'}> ${task.name} </label>
      </div>
      <div>
        <button title="Remove the task" class="remove-btn" data-taskid="${task.id}"><i class="fa-solid fa-trash">X</i></button>
      </div>
    </div>
  `;

  taskEl.innerHTML = taskElMarkup;
  todoContent.appendChild(taskEl);

  const deleteButton = taskEl.querySelector('.remove-btn');
  deleteButton.addEventListener('click', () => {
    deleteTask(task.id);
  });

  countTasks();
}

wrap.addEventListener('click', (e) => {
  if (e.target.classList.contains('radioinput')) {
    const taskId = e.target.id;
    const task = tasks.find((task) => task.id === parseInt(taskId));

    task.isCompleted = !task.isCompleted;
    e.target.closest('.inputs').classList.toggle('slash');

  localStorage.setItem('tasks', JSON.stringify(tasks));
    
    countTasks();
  }
});

function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  const taskElement = document.getElementById(taskId);
  taskElement.remove();

  countTasks();
}

function countTasks() {
  const completedTaskArray = tasks.filter((task) => task.isCompleted === true);

  totalTask.textContent = tasks.length;
  completedTask.textContent = completedTaskArray.length;
  remainingTask.textContent = tasks.length - completedTaskArray.length;
}
