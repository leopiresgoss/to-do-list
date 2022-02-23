import UpdateList from './src/modules/render-list/update-list.js';

describe('Add/Remove functions test', () => {
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

  const expected1 = [{
    index: 2,
    description: 'test1',
    completed: false,
  }];

  // Add function test
  test('Add function test', () => {
    expect(UpdateList.addTask(todoList.tasks, 'test1')).toEqual(expect.arrayContaining(expected1));
  });

  // Remove function test
  // test('Remove function test', () => {
  //   expect(UpdateList.removeTask()).toBe();
  // });
});
