# ✅ Proyecto: Lista de Tareas - Angular

Este proyecto consiste en una aplicación básica de lista de tareas desarrollada con **Angular 18**, como parte de los requerimientos del curso. La app permite al usuario agregar, completar, eliminar y filtrar tareas. Está desarrollada con componentes standalone y desplegada públicamente.

---

## 🔗 Enlace en línea (Vercel)

👉 [https://prai-1.vercel.app](https://prai-1.vercel.app)

---

## 🎯 Requisitos del curso cubiertos

### Funcionalidades

- ✅ Agregar tareas a una lista
- ✅ Marcar tareas como completadas
- ✅ Filtrar tareas completadas o pendientes
- ✅ Eliminar tareas

### Funciones implementadas

- `agregarTarea(taskName)`  
- `eliminarTarea(taskId)`  
- `filtrarTareas(completadas)`  
- `mostrarTareas()` (se implementa con `filtrarTareas` y la actualización del estado Angular)

### Angular: manejo del estado

- Uso de `[(ngModel)]` para capturar texto de nuevas tareas
- Renderizado dinámico con `*ngFor`
- Checkbox para marcar tareas completadas
- Botones para eliminar y filtrar tareas (todas, completadas, pendientes)

### Métodos de Arrays utilizados

- `.map()` → usado para transformar visualmente las tareas antes de mostrarlas
- `.filter()` → para separar tareas por estado
- `.forEach()` → utilizado para actualizar estados

---

## 🧠 Tecnologías utilizadas

- **Angular 18**
- **Vite + SSR**
- **TypeScript**
- **HTML + CSS**
- **Node.js + Express + MongoDB** (para persistencia de tareas, si se conecta al backend)

---

## 💻 Cómo correr este proyecto localmente

### Requisitos

- Node.js v18 o superior
- Angular CLI (`npm install -g @angular/cli`)

### Pasos

```bash
git clone https://github.com/felipemeza07/PRAI1.git
cd PRAI1
npm install
ng serve
http://localhost:4200/
