# 🧪 Reto Módulo 6 – Pruebas Unitarias con Jest

Este proyecto es una lista de tareas básica implementada en JavaScript puro. Para este reto, se añadieron pruebas unitarias usando [Jest](https://jestjs.io/) con el fin de verificar el correcto funcionamiento de las funciones clave.

## ✅ Funcionalidades del Proyecto

- Agregar tareas
- Marcar tareas como completadas
- Filtrar tareas completadas o pendientes
- Eliminar tareas

## 🧪 Funciones Probadas con Jest

Las pruebas unitarias se encuentran en el archivo `taskFunctions.test.js`. Se probaron las siguientes funciones:

- `agregarTarea`: Agrega una nueva tarea a la lista
- `eliminarTarea`: Elimina la tarea indicada por su ID
- `marcarComoCompletada`: Cambia el estado de una tarea (completada o no)
- `filtrarTareas(true)`: Devuelve solo las tareas completadas
- `filtrarTareas(false)`: Devuelve solo las tareas pendientes

## 📁 Estructura

```
PRAILuisFelipeMeza/
├── taskFunctions.js
├── taskFunctions.test.js
├── package.json
└── ...
```

## ⚙️ Instalación y Uso

1. Clona el repositorio:
```bash
git clone https://github.com/felipemeza07/PRAI1.git
cd PRAILuisFelipeMeza
```

2. Instala dependencias:
```bash
npm install
```

3. Corre los tests:
```bash
npm test
```
