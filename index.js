const express = require('express');
const app = express();

const taskArr = [
    {
        id: 1,
        task: 'Complete project documentation',
        tags: ['Node.js', 'JavaScript'],
        status: 'todo',
    },
    {
        id: 2,
        task: 'Create REST API endpoints',
        tags: ['Node.js', 'Express'],
        status: 'in-progress',
    },
    {
        id: 3,
        task: 'Write unit tests',
        tags: ['Node.js', 'Jest'],
        status: 'done',
    },
]

app.get('/', (req, res) => {
  res.send('Task Manager API');
});

app.get('/tasks', (req, res) => {
  res.json(taskArr);
});

app.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = taskArr.find(t => t.id === taskId);
  if (task) {
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

app.post('/tasks', (req, res) => {
  // Logic to create a new task
  res.send('Task created');
});

app.put('/tasks/:id', (req, res) => {
  // Logic to update a task by ID
  res.send(`Task with ID ${req.params.id} updated`);
});

app.delete('/tasks/:id', (req, res) => {
  // Logic to delete a task by ID
  res.send(`Task with ID ${req.params.id} deleted`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});