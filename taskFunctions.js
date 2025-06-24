// taskFunctions.js

function agregarTarea(tareas, nombre) {
  const nuevaTarea = {
    id: Date.now(),
    nombre,
    completada: false,
  };
  return [...tareas, nuevaTarea];
}

function eliminarTarea(tareas, id) {
  return tareas.filter(t => t.id !== id);
}

function marcarComoCompletada(tareas, id) {
  return tareas.map(t =>
    t.id === id ? { ...t, completada: !t.completada } : t
  );
}

function filtrarTareas(tareas, completadas) {
  return tareas.filter(t => t.completada === completadas);
}

module.exports = {
  agregarTarea,
  eliminarTarea,
  marcarComoCompletada,
  filtrarTareas,
};