import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  newTask: string = '';
  filtro: 'todas' | 'completadas' | 'pendientes' = 'todas';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas(): void {
    this.taskService.getTasks().subscribe((tareas: Task[]) => {
      this.tasks = tareas;
      this.filtrarTareas();
    });
  }

  agregarTarea(): void {
    if (this.newTask.trim() === '') return;

    this.taskService.addTask(this.newTask).subscribe((tarea: Task) => {
      this.tasks.push(tarea);
      this.newTask = '';
      this.filtrarTareas();
    });
  }

  eliminarTarea(id: string): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(t => t._id !== id);
      this.filtrarTareas();
    });
  }

  cambiarEstado(tarea: Task): void {
    this.taskService.updateTask(tarea._id!, !tarea.completed).subscribe((tareaActualizada: Task) => {
      tarea.completed = tareaActualizada.completed;
      this.filtrarTareas();
    });
  }

  filtrarTareas(): void {
    if (this.filtro === 'completadas') {
      this.filteredTasks = this.tasks.filter(t => t.completed);
    } else if (this.filtro === 'pendientes') {
      this.filteredTasks = this.tasks.filter(t => !t.completed);
    } else {
      this.filteredTasks = this.tasks
  .filter(t => {
    if (this.filtro === 'completadas') return t.completed;
    if (this.filtro === 'pendientes') return !t.completed;
    return true;
  })
  .map(t => ({
    ...t,
    label: `${t.completed ? '✔️' : '❌'} ${t.name}`
  }));
    }
  }

  setFiltro(f: 'todas' | 'completadas' | 'pendientes') {
    this.filtro = f;
    this.filtrarTareas();
  }
}