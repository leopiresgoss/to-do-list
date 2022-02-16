import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';

import DisplayList from './modules/render-list/display-list.js';
import { addTask } from './modules/render-list/update-list';

import displayEnterIcon from './modules/display-images/enter-icon.js';
import { add } from 'lodash';

let tasks = [
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
];

const setAddListener = (taskList) => {
  const addForm = document.getElementById('add-form');
  
  addForm.addEventListener('submit', (event) => {
    const addInput = document.getElementById('list-add');
    taskList = addTask(taskList, addInput.value);
    addInput.value = '';
    event.preventDefault();
  })
} 

const renderList = new DisplayList(tasks);

// display all tasks
renderList.createList(tasks);


// display enter icon
displayEnterIcon();

// set Listener
setAddListener(tasks);
