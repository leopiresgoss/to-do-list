import DisplayList from './display-list.js';
import UpdateList from './update-list.js';

export default class Listeners extends DisplayList {
  constructor(todoList) {
    super();
    this.todoList = todoList;
  }

  removeEditClass = () => {
    document.getElementById('list-title').parentNode.classList.remove('edit');

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

    addForm.parentNode.addEventListener('click', () => {
      this.removeEditClass();
    });

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

  showDeleteBtn = (task) => {
    task.addEventListener('click', (event) => {
      const li = event.target.parentNode;
      this.removeEditClass();
      li.classList.add('edit');
      const deleteBtn = li.querySelector('.change-order');
      deleteBtn.classList.add('remove');
      deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
      this.setDeleteListener(deleteBtn);
    });
  };

  editTaskListener = (task) => {
    task.addEventListener('change', (event) => {
      const input = event.currentTarget;
      const id = Number(input.id.replace(/\D+/g, ''));

      this.todoList.tasks[id - 1].description = input.value;
      UpdateList.saveList(this.todoList);
    });
  };

  checkTask = (task) => {
    const li = task.parentNode;
    const checkBtn = li.querySelector('.check');
    const id = Number(task.id.replace(/\D+/g, ''));

    checkBtn.addEventListener('click', () => {
      if (id) {
        this.todoList = UpdateList.updateTaskCompleted(id, this.todoList);
        this.showAll();
      }
    });
  };

  tasksListeners = () => {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach((task) => {
      this.showDeleteBtn(task);
      this.editTaskListener(task);
      this.checkTask(task);
    });
  };

  updateListTitle = () => {
    const listTitle = document.getElementById('list-title');

    listTitle.parentNode.addEventListener('click', () => {
      this.removeEditClass();
      listTitle.parentNode.classList.add('edit');
    });

    listTitle.addEventListener('change', (event) => {
      this.todoList.listName = event.currentTarget.value;
      UpdateList.saveList(this.todoList);
    });
  };

  clearListener = () => {
    document.querySelector('.clear-completed').addEventListener('click', () => {
      this.todoList = UpdateList.clearCompletedTask(this.todoList);
      this.showAll(this.todoList);
    });
  };

  showAll = () => {
    this.todoList.tasks = UpdateList.updateIndex(this.todoList.tasks);

    // update localstorage
    UpdateList.saveList(this.todoList);

    // display updated List
    this.updateList(this.todoList);
    this.removeEditClass();
    this.tasksListeners();
  };
}
