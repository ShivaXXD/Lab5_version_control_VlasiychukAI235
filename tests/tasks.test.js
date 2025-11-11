// tests/tasks.test.js
const { addTask, markTaskComplete, deleteTask } = require('../src/tasks');

describe('Модульні тести для tasks.js', () => {

  /**
   * Модульний тест 1
   */
  test('Модульний 1: Повинен коректно додавати нове завдання', () => {
    const initialTasks = [];
    const newTasks = addTask(initialTasks, 'Вивчити Jest');
    
    expect(newTasks.length).toBe(1);
    expect(newTasks[0].name).toBe('Вивчити Jest');
    expect(newTasks[0].isComplete).toBe(false);
    expect(newTasks[0].id).toBe(1); // Перевіряємо генерацію ID
  });

  /**
   * Модульний тест 2
   */
  test('Модульний 2: Повинен позначати завдання як виконане', () => {
    const tasks = [{ id: 1, name: 'Завдання 1', isComplete: false }];
    const updatedTasks = markTaskComplete(tasks, 1);
    
    expect(updatedTasks[0].isComplete).toBe(true);
    expect(updatedTasks[0].name).toBe('Завдання 1'); // Переконуємось, що інші дані не змінились
  });

  /**
   * Модульний тест 3
   */
  test('Модульний 3: Повинен видаляти завдання', () => {
    const tasks = [
      { id: 1, name: 'Завдання 1', isComplete: false },
      { id: 2, name: 'Завдання 2', isComplete: true }
    ];
    const updatedTasks = deleteTask(tasks, 1); // Видаляємо завдання з id: 1
    
    expect(updatedTasks.length).toBe(1);
    expect(updatedTasks[0].id).toBe(2); // Перевіряємо, що залишилось правильне завдання
    expect(updatedTasks[0].name).toBe('Завдання 2');
  });

});
