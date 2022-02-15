import './style.css';
import '@fortawesome/fontawesome-free/js/all.js'
import {tasks, createList} from './modules/render-list/render-list.js' 

// display all tasks
createList(tasks);
