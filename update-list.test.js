import UpdateList from './src/modules/render-list/update-list.js';

describe('Add/Remove/Update completed task/Edit task/ Clear compleated test', () => {
  const todoList = {
    listName: "Today's To Do",
    tasks: [
      {
        index: 1,
        description: 'test0',
        completed: false,
      },
    ],
  };

  const expected1 = [
    {
      index: 2,
      description: 'test1',
      completed: false,
    },
  ];

  const expected2 = {
    listName: "Today's To Do",
    tasks: expected1,
  };

  const expected3 = {
    listName: "Today's To Do",
    tasks: [
      {
        index: 2,
        description: 'test1',
        completed: true,
      },
    ],
  };

  const expected4 = {
    listName: "Today's To Do",
    tasks: [
      {
        index: 2,
        description: 'test edited',
        completed: true,
      },
    ],
  };

  const expected5 = {
    listName: "Today's To Do",
    tasks: [],
  };

  // Add function test
  test('Add function test', () => {
    expect(UpdateList.addTask(todoList.tasks, 'test1')).toEqual(expect.arrayContaining(expected1));
  });

  // Remove function test
  test('Remove function test', () => {
    expect(UpdateList.removeTask(1, todoList)).toMatchObject(expected2);
  });

  // Update task completed
  test('Update task completed', () => {
    expect(UpdateList.updateTaskCompleted(1, todoList)).toMatchObject(expected3);
  });

  // edit task description
  test('Edit task description', () => {
    expect(UpdateList.editTask(1, 'test edited', todoList)).toMatchObject(expected4);
  });

  // Clear all completed function
  test('Clear all completed function', () => {
    expect(UpdateList.clearCompletedTask(todoList)).toMatchObject(expected5);
  });
});
