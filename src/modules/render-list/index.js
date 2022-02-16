import DisplayList from './display-list.js';
import { addTask, saveList, getListFromLocalStorage } from './update-list.js';

const displayList = new DisplayList();

const removeEditClass = () => {
  const tasks = document.querySelectorAll('.task');
  tasks.forEach((task) => {
    const li = task.parentNode;
    li.classList.remove('edit')
    li.lastChild.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
  });
}

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

const showDeleteBtn = () => {
  const tasks = document.querySelectorAll('.task');
  tasks.forEach((task) => {
    task.addEventListener('click', (event) => {
      const li = event.target.parentNode;
      removeEditClass();
      li.classList.add('edit');
      li.lastChild.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    })
  });

}

const renderList = () => {
  // display all tasks
  const todoList = getListFromLocalStorage();

  displayList.createList(todoList.tasks);

  // set Listener
  setAddListener(todoList);

  showDeleteBtn();
};

export default renderList;