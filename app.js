const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const showAllBtn = document.getElementById("showAll");
const showCompletedBtn = document.getElementById("showCompleted");
const showPendingBtn = document.getElementById("showPending");

let tasks = [];

function renderTasks(filter = "all") {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const shouldRender =
      filter === "all" ||
      (filter === "completed" && task.completed) ||
      (filter === "pending" && !task.completed);

    if (shouldRender) {
      const li = document.createElement("li");
      li.className = "task-item";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        renderTasks(filter); // Mantiene el filtro actual
      });

      const span = document.createElement("span");
      span.textContent = task.text;
      if (task.completed) span.classList.add("completed");

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑️";
      deleteBtn.className = "delete-btn";
      deleteBtn.addEventListener("click", () => {
        tasks.splice(index, 1);
        renderTasks(filter);
      });

      const taskLeft = document.createElement("div");
      taskLeft.style.display = "flex";
      taskLeft.style.alignItems = "center";
      taskLeft.style.gap = "10px";
      taskLeft.appendChild(checkbox);
      taskLeft.appendChild(span);

      li.appendChild(taskLeft);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    }
  });
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
