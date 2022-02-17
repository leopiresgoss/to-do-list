import DisplayList from './display-list.js';
import Listeners from './listeners.js';

import { getListFromLocalStorage } from './update-list.js';

const renderList = () => {
  // display all tasks
  const todoList = getListFromLocalStorage();
  const displayList = new DisplayList();
  const listeners = new Listeners(todoList);
  displayList.createList(todoList.tasks);
  listeners.setAddListener();
  listeners.showDeleteBtn();
};

export default renderList;