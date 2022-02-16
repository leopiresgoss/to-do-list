import DisplayList from './display-list.js';
import { addTask, saveList } from './update-list.js';

const displayList = new DisplayList();

const todoList = {
  listName: "Today's To Do",
  tasks: [
    {
      index: 0,
      description: 'wash the dishes',
      completed: false,
    },
    {
      index: 1,
      description: 'complete To Do list project',
      completed: false,
    },
    {
      index: 2,
      description: 'complete To Do list project',
      completed: true,
    },
  ],
};

const setAddListener = (todoList) => {
  const { tasks } = todoList;

  const addForm = document.getElementById('add-form');

  addForm.addEventListener('submit', (event) => {
    const addInput = document.getElementById('list-add');

    // update todoList
    todoList.tasks = addTask(tasks, addInput.value);

    // update localstorage
    saveList(todoList);

    // display updated List
    displayList.updateList(todoList.tasks);

    addInput.value = '';
    event.preventDefault();
  });
};

const renderList = () => {
  // display all tasks
  displayList.createList(todoList.tasks);

  // set Listener
  setAddListener(todoList);
};

export default renderList;