let tasks = [
  {
    id: "1",
    task: "Go gym",
    completed: true,
  },
  {
    id: "2",
    task: "Practice react",
    completed: false,
  },
  {
    id: "3",
    task: "Read a book",
    completed: false,
  },
];

const addTask = (task) => {
  tasks.push(task);
};

const removeTask = (id) => {
  console.log(id);
  tasks = tasks.filter((task) => task.id !== id);
};

const updateTask = (id, givenTask) => {
  tasks.map((task) => {
    if (task.id === id) {
      task.task = givenTask.task;
      task.completed = givenTask.completed;
    }
    return task;
  });
};

module.exports = { tasks, addTask, removeTask, updateTask };
