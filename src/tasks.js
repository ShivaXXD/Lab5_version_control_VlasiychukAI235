// src/tasks.js

/**
 * Модуль 1: Додає нове завдання до масиву.
 */
function addTask(tasks, taskName) {
  // Проста валідація, щоб не додавати порожні рядки
  if (!taskName || taskName.trim().length === 0) {
    return tasks;
  }
  
  const newTask = {
    // Генеруємо новий ID, що на 1 більший за максимальний існуючий
    id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    name: taskName,
    isComplete: false,
  };
  return [...tasks, newTask]; // Повертаємо новий масив (immutable)
}

/**
 * Модуль 2: Позначає завдання як виконане за його ID.
 */
function markTaskComplete(tasks, taskId) {
  return tasks.map(task => {
    if (task.id === taskId) {
      // Повертаємо копію об'єкта з однією зміненою властивістю
      return { ...task, isComplete: true };
    }
    return task;
  });
}

/**
 * Модуль 3: Видаляє завдання з масиву за його ID.
 */
function deleteTask(tasks, taskId) {
  return tasks.filter(task => task.id !== taskId);
}

// Експортуємо всі три функції
module.exports = { addTask, markTaskComplete, deleteTask };
