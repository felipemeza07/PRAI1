// Clase Task
class Task {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.completed = false;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}

// Lista global de tareas
let tareas = [];
let idCounter = 0;

// Agregar tarea
export function agregarTarea() {
  const input = document.getElementById("taskInput");
  const nombre = input.value.trim();
  if (nombre !== "") {
    const nuevaTarea = new Task(++idCounter, nombre);
    tareas.push(nuevaTarea);
    input.value = "";
    mostrarTareas();
  }
}

// Eliminar tarea
function eliminarTarea(id) {
  tareas = tareas.filter((t) => t.id !== id);
  mostrarTareas();
}

// Filtrar tareas
export function mostrarTareas(filtro = null) {
  const lista = document.getElementById("taskList");
  lista.innerHTML = "";

  let tareasAMostrar = tareas;
  if (filtro === true || filtro === false) {
    tareasAMostrar = tareas.filter((t) => t.completed === filtro);
  }

  tareasAMostrar.forEach((tarea) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarea.completed;
    checkbox.addEventListener("change", () => {
      tarea.toggleCompleted();
      mostrarTareas(filtro);
    });

    const span = document.createElement("span");
    span.textContent = tarea.name;
    if (tarea.completed) {
      span.classList.add("completed");
    }

    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.addEventListener("click", () => eliminarTarea(tarea.id));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(eliminarBtn);

    lista.appendChild(li);
  });
}

