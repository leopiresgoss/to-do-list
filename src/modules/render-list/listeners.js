import DisplayList from './display-list.js';
import UpdateList from './update-list.js';

export default class Listeners extends DisplayList {
  constructor(todoList) {
    super();
    this.todoList = todoList;
  }

  removeEditClass = () => {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach((task) => {
      const li = task.parentNode;
      li.classList.remove('edit');
      const button = li.lastChild;
      button.classList.remove('remove');
      button.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    });
  };

  setAddListener = () => {
    const addForm = document.getElementById('add-form');

    addForm.addEventListener('submit', (event) => {
      const taskList = this.todoList.tasks;
      const addInput = document.getElementById('list-add');

      // update this.todoList
      this.todoList.tasks = UpdateList.addTask(taskList, addInput.value);

      this.showAll();

      addInput.value = '';
      event.preventDefault();
    });
  };

  setDeleteListener = (btn) => {
    btn.addEventListener('click', (event) => {
      const btn = event.currentTarget;
      const id = Number(btn.getAttribute('data-id'));
      this.todoList = UpdateList.removeTask(id, this.todoList);
      this.showAll();
    });
  };

  showDeleteBtn = () => {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach((task) => {
      task.addEventListener('click', (event) => {
        const li = event.target.parentNode;
        this.removeEditClass();
        li.classList.add('edit');
        const deleteBtn = li.querySelector('.change-order');
        deleteBtn.classList.add('remove');
        deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
        this.setDeleteListener(deleteBtn);
      });
    });
  };

  showAll = () => {
    this.todoList.tasks = UpdateList.updateIndex(this.todoList.tasks);

    // update localstorage
    UpdateList.saveList(this.todoList);

    // display updated List
    this.updateList(this.todoList.tasks);
    this.removeEditClass();
    this.showDeleteBtn();
  };
}