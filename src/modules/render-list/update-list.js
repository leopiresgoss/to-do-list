// import DisplayList from './display-list.js';

// get tasks from local storage
const getListFromLocalStorage = () => {
  let todoList = JSON.parse(window.localStorage.getItem('todolist'));
  if (todoList) return todoList;

  // it will update todoList obj for empty taskList
  todoList = {
    listName: "Today's To Do",
    tasks: [],
  };
  return todoList;
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

// update index

// remove task
const removeTask = (id, todoList) => {
  const { tasks } = todoList;
  todoList.tasks = tasks.filter((task) => task.index !== id);

  // todo: update index
  return todoList;
};

// remove all task

export { addTask, saveList, getListFromLocalStorage, removeTask };
