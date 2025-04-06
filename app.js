let tasks = [];

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const showAllBtn = document.getElementById('showAll');
const showCompletedBtn = document.getElementById('showCompleted');
const showPendingBtn = document.getElementById('showPending');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = '';
    renderTasks();
  }
});

function renderTasks(filter = 'all') {
  taskList.innerHTML = '';

  let filteredTasks = tasks;
  if (filter === 'completed') {
    filteredTasks = tasks.filter(task => task.completed);
  } else if (filter === 'pending') {
    filteredTasks = tasks.filter(task => !task.completed);
  }

  filteredTasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = task.text;
    taskSpan.className = task.completed ? 'completed' : '';
    taskSpan.addEventListener('click', () => toggleTask(index));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => deleteTask(index));

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

showAllBtn.addEventListener('click', () => renderTasks('all'));
showCompletedBtn.addEventListener('click', () => renderTasks('completed'));
showPendingBtn.addEventListener('click', () => renderTasks('pending'));
