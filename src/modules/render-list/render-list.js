const tasks = [
  {
    index: 0,
    description: 'wash the dishes',
    completed: false,
  },
  {
    index: 1,
    description: 'complete To Do list project',
    completed: false,
  },
  {
    index: 2,
    description: 'complete To Do list project',
    completed: false,
  },
];

// generate elements
const elementGenerator = (type, classNames) => {
  const elem = document.createElement(type);
  if (classNames) {
    const classNamesArr = classNames.split(' ');
    classNamesArr.forEach((className) => {
      elem.classList.add(className);
    });
  }
  return elem;
};

const createTask = (task) => {
  const idContent = `task-${task.index}`;
  const li = elementGenerator('li');

  const checkBtn = elementGenerator('button', 'check');
  checkBtn.type = 'button';
  checkBtn.title = 'check';
  checkBtn.innerHTML = '<i class="fa-regular fa-square"></i>';

  const label = elementGenerator('label', 'active');
  label.textContent = task.description;
  label.setAttribute('for', idContent);

  const input = elementGenerator('input', 'task');
  input.type = 'text';
  input.value = task.description;
  input.setAttribute('maxlength', '255');
  input.id = idContent;

  // update adding the image
  const changeBtn = elementGenerator('button', 'change-order');
  changeBtn.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';

  li.append(checkBtn, label, input, changeBtn);

  return li;
};

const createList = (tasks) => {
  const list = document.querySelector('.list');

  tasks.forEach((task) => {
    const li = createTask(task);
    list.appendChild(li);
  });
};

export { tasks, createList };