export default class DisplayList {
  elementGenerator = (type, classNames) => {
    const elem = document.createElement(type);
    if (classNames) {
      const classNamesArr = classNames.split(' ');
      classNamesArr.forEach((className) => {
        elem.classList.add(className);
      });
    }
    return elem;
  }

  // task incompleted will show the input
  taskInput(task, idContent) {
    const input = this.elementGenerator('input', 'task');
    input.type = 'text';
    input.value = task.description;
    input.setAttribute('maxlength', '255');
    input.id = idContent;

    return input;
  }

  createTask(task) {
    const idContent = `task-${task.index}`;
    const li = this.elementGenerator('li');

    const checkBtn = this.elementGenerator('button', 'check');
    checkBtn.type = 'button';
    checkBtn.title = 'check';

    let taskElem;

    if (task.completed) {
      checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
      taskElem = this.taskInput(task, idContent);
      taskElem.classList.add('completed');
      li.classList.add('task-completed');
    } else {
      checkBtn.innerHTML = '<i class="fa-regular fa-square"></i>';
      taskElem = this.taskInput(task, idContent);
    }

    const changeBtn = this.elementGenerator('button', 'change-order');
    changeBtn.setAttribute('data-id', `${task.index}`);
    changeBtn.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';

    li.append(checkBtn, taskElem, changeBtn);

    return li;
  }

  createList(todoList) {
    const listTitle = document.getElementById('list-title');
    if (todoList.listName !== '') listTitle.value = todoList.listName;

    const { tasks } = todoList;

    const list = document.getElementById('todo-box');
    const ul = this.elementGenerator('ul', 'list');
    tasks.forEach((task) => {
      const li = this.createTask(task);
      ul.appendChild(li);
    });
    list.appendChild(ul);
  }

  clearList = () => {
    const list = document.getElementById('todo-box');
    list.removeChild(list.children[0]);
  }

  updateList(todoList) {
    this.clearList();
    this.createList(todoList);
  }
}
