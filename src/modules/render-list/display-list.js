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

  taskCompleted(task, idContent) {
    const h6 = this.elementGenerator('h6', 'task completed');
    h6.textContent = task.description;
    h6.id = idContent;

    return h6;
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
      taskElem = this.taskCompleted(task, idContent);
      li.classList.add('task-completed');
    } else {
      checkBtn.innerHTML = '<i class="fa-regular fa-square"></i>';
      taskElem = this.taskInput(task, idContent);
    }

    const changeBtn = this.elementGenerator('button', 'change-order');
    changeBtn.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';

    li.append(checkBtn, taskElem, changeBtn);

    return li;
  }

  createList(tasks) {
    const list = document.querySelector('.list');

    tasks.forEach((task) => {
      const li = this.createTask(task);
      list.appendChild(li);
    });

    return list;
  }
}
