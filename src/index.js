import './style.css';
import '@fortawesome/fontawesome-free/js/all.js'
import enterIcon from './images/outline_subdirectory_arrow_left_black_24dp.png'
import {tasks, createList} from './modules/render-list/render-list.js' 

// display all tasks
createList(tasks);

document.getElementById('add-img').src = enterIcon;


