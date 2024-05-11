// Import the express module
const express = require("express");

// Create an Express application
const app = express();

// Import utility functions for task management
const { tasks, addTask, removeTask, updateTask } = require("./utils");

// Middleware to parse JSON bodies. This allows us to easily access `req.body`
app.use(express.json());

// Route to get all tasks. When a GET request is made to "/tasks", this route will be triggered
app.get("/tasks", (req, res) => {
  // Respond with the current list of tasks in JSON format
  res.status(200).json(tasks);
});

// Route to add a new task. This uses two middleware functions in sequence for validation and then adding the task
app.post("/task", function fstFunction(req, res, next) {
  console.log("fstFunction");
  // Extract the new task data from the request body
  const newTask = req.body;
  // Validate the new task data. If any field is missing, return a 400 error
  if (
    newTask.id === undefined ||
    newTask.task === undefined ||
    newTask.completed === undefined
  ) {
    res.status(400).send("Invalid task data");
    return;
  } else {
    // If validation passes, proceed to the next middleware function
    next();
  }
}, function stfunction(req, res) {
  // This function adds the task
  const newTask = req.body;
  console.log("stfunction");
  addTask(newTask);
  // Respond to the client that the task was added successfully
  res.status(200).send("Task added");
});

// Route to update an existing task. It uses the task ID provided in the URL to identify the task to update
app.put("/task/:taskId", (req, res) => {
  // Extract the task ID from the URL parameters
  const id = req.params.taskId;
  // Extract the updated task data from the request body
  const givenTask = req.body;
  // Update the task in the list
  updateTask(id, givenTask);
  // Respond to the client that the task was updated successfully
  res.status(200).send("Task updated");
});

// Route to delete a task. It uses the task ID provided in the URL to identify the task to remove
app.delete("/task/:taskDee", (req, res) => {
  // Extract the task ID from the URL parameters
  const id = req.params.taskDee;
  // Remove the task from the list
  removeTask(id);
  // Respond to the client that the task was removed successfully
  res.status(200).send("Task removed");
});

// Start the server on port 3004. This makes the app listen for requests on port 3004
app.listen(3004, () => {
  console.log("Server is running on port 3004");
});
