// Import the express module
const express = require("express");
// Create an Express application
const app = express();
// Import utility functions for task management
const { tasks, addTask, removeTask, updateTask } = require("./utils");

// Middleware to parse JSON bodies
app.use(express.json());

// Route to get all tasks
app.get("/tasks", (req, res) => {
  // Respond with the current list of tasks in JSON format
  res.status(200).json(tasks);
});

// Route to add a new task
app.post("/task", (req, res) => {
  // Extract the new task from the request body
  const newTask = req.body;
  // Add the new task to the list
  addTask(newTask);
  // Respond to the client
  res.status(200).send("Task added");
});

// Route to update an existing task
app.put("/task/:taskId", (req, res) => {
  // Extract the task ID from the URL parameters
  const id = req.params.taskId;
  // Extract the updated task data from the request body
  const givenTask = req.body;
  // Update the task in the list
  updateTask(id, givenTask);
  // Respond to the client
  res.status(200).send("Task updated");
});

// Route to delete a task
app.delete("/task/:taskDee", (req, res) => {
  // Extract the task ID from the URL parameters
  const id = req.params.taskDee;
  // Remove the task from the list
  removeTask(id);
  // Respond to the client
  res.status(200).send("Task removed");
});

// Start the server on port 3004
app.listen(3004, () => {
  console.log("Server is running on port 3004");
});
