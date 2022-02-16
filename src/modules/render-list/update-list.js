// import DisplayList from './display-list.js';

// get tasks from local storage
const getListFromLocalStorage = () => {
  const taskList = JSON.parse(window.localStorage.getItem('todolist'));
  if (taskList) return taskList;
  return {};
};

// save tasks to local storage
const saveList = (todoList) => {
  window.localStorage.setItem('todolist', JSON.stringify(todoList));
};

// add new task
const addTask = (taskList, description) => {
  let index = 0;
  if (taskList.length > 1) {
    index = taskList.length;
  }

  taskList.push({
    index,
    description,
    completed: false,
  });

  return taskList;
};

// remove to local storage

export { addTask, saveList };
