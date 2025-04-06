const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const showAllBtn = document.getElementById("showAll");
const showCompletedBtn = document.getElementById("showCompleted");
const showPendingBtn = document.getElementById("showPending");

let tasks = [];

function renderTasks(filter = "all") {
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter(task =>
    filter === "completed" ? task.completed :
    filter === "pending" ? !task.completed :
    true
  );

  const taskItems = filteredTasks.map((task, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTaskCompletion(task.id));

    const span = document.createElement("span");
    span.textContent = task.name;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.addEventListener("click", () => deleteTask(task.id));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
  });

  // Agregamos al DOM usando forEach para seguir usando los 3 métodos
  taskItems.forEach(item => taskList.appendChild(item));
}

addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text !== "") {
    tasks.push({ text, completed: false });
    taskInput.value = "";
    renderTasks(); // Muestra todo por defecto
  }
});

showAllBtn.addEventListener("click", () => renderTasks("all"));
showCompletedBtn.addEventListener("click", () => renderTasks("completed"));
showPendingBtn.addEventListener("click", () => renderTasks("pending"));

renderTasks();
