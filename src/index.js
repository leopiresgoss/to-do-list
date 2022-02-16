import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';

import { tasks, createList } from './modules/render-list/render-list.js';
import displayEnterIcon from './modules/display-images/enter-icon.js';

// display all tasks
createList(tasks);

// display enter icon
displayEnterIcon();
