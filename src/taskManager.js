// src/taskManager.js

// Імпортуємо модулі з 'tasks.js' для Інтеграційного тесту 1
const { addTask, markTaskComplete } = require('./tasks');

/**
 * Інтеграція 1: Додає завдання і одразу позначає його виконаним.
 * Ця функція інтегрує `addTask` та `markTaskComplete` з 'tasks.js'.
 */
function addAndMarkComplete(tasks, taskName) {
  // 1. Інтеграція з `addTask`
  const tasksWithNew = addTask(tasks, taskName);
  
  // Якщо завдання не додалось (наприклад, порожнє ім'я), повертаємо як є
  if (tasksWithNew.length === tasks.length) {
    return tasks; 
  }
  
  // Отримуємо ID щойно доданого завдання
  const newTaskId = tasksWithNew[tasksWithNew.length - 1].id;
  
  // 2. Інтеграція з `markTaskComplete`
  const updatedTasks = markTaskComplete(tasksWithNew, newTaskId);
  
  return updatedTasks;
}


// --- Логіка для Інтеграційного тесту 2 (внутрішня інтеграція) ---

/**
 * (Внутрішній модуль A) Фільтрує лише виконані завдання.
 */
function filterCompleted(tasks) {
   return tasks.filter(task => task.isComplete === true);
}

/**
 * (Внутрішній модуль B) Форматує назву завдання.
 */
function formatTaskName(task) {
  return `[DONE] ${task.name.toUpperCase()}`;
}

/**
 * Інтеграція 2: Отримує відформатований список імен виконаних завдань.
 * Ця функція інтегрує `filterCompleted` та `formatTaskName` (внутрішня інтеграція).
 */
function getFormattedCompletedTasks(tasks) {
  // 1. Використання `filterCompleted`
  const completedTasks = filterCompleted(tasks);
  // 2. Використання `formatTaskName`
  const formattedNames = completedTasks.map(task => formatTaskName(task));
  return formattedNames;
}

// Експортуємо все для тестів (як у прикладі `currency.js` [cite: 115])
module.exports = { 
  addAndMarkComplete, 
  getFormattedCompletedTasks,
  filterCompleted, 
  formatTaskName 
};
