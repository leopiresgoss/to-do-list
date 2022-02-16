import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import enterIcon from './images/outline_subdirectory_arrow_left_black_24dp.png';
import { tasks, createList } from './modules/render-list/render-list.js';

// display all tasks
createList(tasks);

const img = document.createElement('img');
img.src = enterIcon;
img.alt = '';
img.id = 'add-img';
document.querySelector('.add-btn').appendChild(img);
