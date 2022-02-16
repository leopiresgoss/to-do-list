import DisplayList from './display-list.js';
import { addTask } from './update-list';

const displayList = new DisplayList();

let todoList = {
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

const setAddListener = (taskList) => {
  const addForm = document.getElementById('add-form');

  addForm.addEventListener('submit', (event) => {
    const addInput = document.getElementById('list-add');
    taskList = addTask(taskList, addInput.value);
    addInput.value = '';
    
    // update to localstorage
    todoList.tasks = taskList;
    displayList.updateList(todoList.tasks);

    event.preventDefault();
  });

};

const renderList = () => {
  // display all tasks
  displayList.createList(todoList.tasks);

  // set Listener
  setAddListener(todoList.tasks);
};

export default renderList;