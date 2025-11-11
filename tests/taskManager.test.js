// tests/taskManager.test.js
const { 
  addAndMarkComplete, 
  getFormattedCompletedTasks, 
  filterCompleted, 
  formatTaskName 
} = require('../src/taskManager');

describe('Інтеграційні тести для taskManager.js', () => {

  /**
   * Інтеграційний тест 1: Перевірка `addAndMarkComplete`
   * Тестує інтеграцію між 'tasks.js' та 'taskManager.js'
   */
  test('Інтеграційний 1: Повинен додавати і одразу позначати завдання виконаним', () => {
    const initialTasks = [];
    const taskName = 'Нове супер-завдання';
    
    // Ця функція інтегрує `addTask` та `markTaskComplete` з іншого файлу
    const finalTasks = addAndMarkComplete(initialTasks, taskName);
    
    expect(finalTasks.length).toBe(1);
    expect(finalTasks[0].name).toBe(taskName);
    expect(finalTasks[0].id).toBe(1);
    expect(finalTasks[0].isComplete).toBe(true); // Ключова перевірка інтеграції
  });

  
  /**
   * Інтеграційний тест 2: Перевірка `getFormattedCompletedTasks`
   * Тестує внутрішню інтеграцію (подібно до `addCurrencies` [cite: 138-141])
   * Ми також тестуємо допоміжні функції, як у прикладі `currency.test.js` [cite: 130-137]
   */
   
  // (Допоміжний тест, як у лабі)
  test('Тест (допоміжний): Повинен фільтрувати виконані завдання', () => {
    const tasks = [
      { id: 1, name: 'A', isComplete: true },
      { id: 2, name: 'B', isComplete: false },
    ];
    const completed = filterCompleted(tasks);
    expect(completed.length).toBe(1);
    expect(completed[0].name).toBe('A');
  });

  // (Допоміжний тест, як у лабі)
  test('Тест (допоміжний): Повинен форматувати назву завдання', () => {
    const task = { id: 1, name: 'Test task', isComplete: true };
    expect(formatTaskName(task)).toBe('[DONE] TEST TASK');
  });

  // Головний тест інтеграції
  test('Інтеграційний 2: Повинен повертати відформатований список виконаних завдань', () => {
    const tasks = [
      { id: 1, name: 'Вивчити Jest', isComplete: true },
      { id: 2, name: 'Написати звіт', isComplete: false },
      { id: 3, name: 'Випити кави', isComplete: true },
    ];
    const formattedList = getFormattedCompletedTasks(tasks);
    
    // Перевіряємо, що функція коректно інтегрувала `filterCompleted` та `formatTaskName`
    expect(formattedList.length).toBe(2);
    expect(formattedList[0]).toBe('[DONE] ВИВЧИТИ JEST');
    expect(formattedList[1]).toBe('[DONE] ВИПИТИ КАВИ');
  });
  
});
