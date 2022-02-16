import DisplayList from './display-list.js';
import { addTask, saveList, getListFromLocalStorage } from './update-list.js';

const displayList = new DisplayList();

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
  const todoList = getListFromLocalStorage();

  displayList.createList(todoList.tasks);

  // set Listener
  setAddListener(todoList);
};

export default renderList;