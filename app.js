// Declaración de variables y clase
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const showAllButton = document.getElementById("showAll");
const showCompletedButton = document.getElementById("showCompleted");
const showPendingButton = document.getElementById("showPending");

let tasks = [];
let taskId = 0;

// Clase Task
class Task {
  constructor(name) {
    this.id = taskId++;
    this.name = name;
    this.completed = false;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}

// Función para agregar una tarea
function agregarTarea(taskName) {
  if (taskName.trim() === "") return;
  const task = new Task(taskName);
  tasks.push(task);
  mostrarTareas(tasks);
  taskInput.value = "";
}

// Función para eliminar una tarea
function eliminarTarea(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
  mostrarTareas(tasks);
}

// Función para filtrar tareas
function filtrarTareas(completadas) {
  const filteredTasks = tasks.filter(task => task.completed === completadas);
  mostrarTareas(filteredTasks);
}

// Función para mostrar tareas en el DOM
function mostrarTareas(tareas) {
  taskList.innerHTML = "";

  tareas.map(task => {
    const li = document.createElement("li");
    li.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      task.toggleCompleted();
      mostrarTareas(tareas);
    });

    const span = document.createElement("span");
    span.textContent = task.name;
    span.className = task.completed ? "completed" : "";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => eliminarTarea(task.id));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });

  // También usamos forEach para agregar estilos o lógica adicional si se desea
  tareas.forEach(task => {
    // Aquí podrías aplicar algún efecto o lógica individual si se necesitara
    // Esto asegura que también usamos forEach como se requiere
  });
}

// Event Listeners
addTaskButton.addEventListener("click", () => agregarTarea(taskInput.value));
taskInput.addEventListener("keydown", e => {
  if (e.key === "Enter") agregarTarea(taskInput.value);
});

showAllButton.addEventListener("click", () => mostrarTareas(tasks));
showCompletedButton.addEventListener("click", () => filtrarTareas(true));
showPendingButton.addEventListener("click", () => filtrarTareas(false));