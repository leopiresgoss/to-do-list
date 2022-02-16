import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';

import DisplayList from './modules/render-list/display-list.js';
import displayEnterIcon from './modules/display-images/enter-icon.js';

const tasks = [
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

const renderList = new DisplayList();

// display all tasks
renderList.createList(tasks);

// display enter icon
displayEnterIcon();
