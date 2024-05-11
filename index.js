const express = require("express");
const app = express();
const { tasks, addTask, removeTask, updateTask } = require("./utils");
app.use(express.json());
app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});
app.post("/task", (req, res) => {
  console.log("hiiii");
  const newTask = req.body;
  addTask(newTask);
  res.status(200).send("tasks");
});
app.put("/task/:taskId", (req, res) => {
  const id = req.params.taskId;
  const givenTask = req.body;
  updateTask(id, givenTask);
  res.status(200).send("tasks updated");
});

app.delete("/task/:taskDee", (req, res) => {
  const id = req.params.taskDee;
  console.log(id);
  removeTask(id);
  res.status(200).send("task removed");
});
app.listen(3004, () => {
  console.log("server is running on port 3004");
});
