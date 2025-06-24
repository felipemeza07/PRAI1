// taskFunctions.test.js

const {
  agregarTarea,
  eliminarTarea,
  marcarComoCompletada,
  filtrarTareas,
} = require('./taskFunctions');

describe('Funciones de lista de tareas', () => {
  let tareas;

  beforeEach(() => {
    tareas = [
      { id: 1, nombre: 'Tarea 1', completada: false },
      { id: 2, nombre: 'Tarea 2', completada: true },
    ];
  });

  test('agregarTarea agrega una nueva tarea', () => {
    const nuevas = agregarTarea(tareas, 'Nueva tarea');
    expect(nuevas.length).toBe(3);
    expect(nuevas[2].nombre).toBe('Nueva tarea');
    expect(nuevas[2].completada).toBe(false);
  });

  test('eliminarTarea elimina la tarea indicada', () => {
    const nuevas = eliminarTarea(tareas, 1);
    expect(nuevas.length).toBe(1);
    expect(nuevas[0].id).toBe(2);
  });

  test('marcarComoCompletada cambia el estado', () => {
    const nuevas = marcarComoCompletada(tareas, 1);
    expect(nuevas.find(t => t.id === 1).completada).toBe(true);
  });

  test('filtrarTareas muestra solo completadas', () => {
    const completadas = filtrarTareas(tareas, true);
    expect(completadas.length).toBe(1);
    expect(completadas[0].completada).toBe(true);
  });

  test('filtrarTareas muestra solo pendientes', () => {
    const pendientes = filtrarTareas(tareas, false);
    expect(pendientes.length).toBe(1);
    expect(pendientes[0].completada).toBe(false);
  });
});