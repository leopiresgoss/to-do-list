export default class UpdateList {
  static getListFromLocalStorage = () => {
    let todoList = JSON.parse(window.localStorage.getItem('todolist'));
    if (todoList) return todoList;

    // it will update todoList obj for empty taskList
    todoList = {
      listName: "Today's To Do",
      tasks: [],
    };
    return todoList;
  };

  // save tasks to local storage
  static saveList = (todoList) => {
    window.localStorage.setItem('todolist', JSON.stringify(todoList));
  };

  // add new task
  static addTask = (taskList, description) => {
    const index = taskList.length + 1;

    taskList.push({
      index,
      description,
      completed: false,
    });

    return taskList;
  };

  // update index
  static updateIndex = (tasks) => {
    tasks = tasks.map((task, index) => {
      task.index = index + 1;
      return task;
    });
    return tasks;
  };

  // remove task
  static removeTask = (id, todoList) => {
    let { tasks } = todoList;
    tasks = tasks.filter((task) => task.index !== id);
    todoList.tasks = tasks;
    return todoList;
  };

  // change completed
  static updateTaskCompleted = (id, todoList) => {
    if (todoList.tasks[id - 1].completed) {
      todoList.tasks[id - 1].completed = false;
    } else {
      todoList.tasks[id - 1].completed = true;
    }

    return todoList;
  };

  static clearCompletedTask = (todoList) => {
    const { tasks } = todoList;
    todoList.tasks = tasks.filter((task) => !task.completed);
    return todoList;
  }
}
