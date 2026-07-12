const express = require('express');
const app = express();

app.use(express.json());

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
  const { task, tags, status } = req.body;
  const newTask = {
    id: taskArr.length > 0 ? Math.max(...taskArr.map(t => t.id)) + 1 : 1,
    task,
    tags,
    status
  };
  taskArr.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = taskArr.findIndex(t => t.id === taskId);
  if (taskIndex !== -1) {
    const { task, tags, status } = req.body;
    taskArr[taskIndex] = { ...taskArr[taskIndex], task, tags, status };
    res.json(taskArr[taskIndex]);
  } else {
    res.status(404).send('Task not found');
  }
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = taskArr.findIndex(t => t.id === taskId);
  if (taskIndex !== -1) {
    taskArr.splice(taskIndex, 1);
    res.send(`Task with ID ${req.params.id} deleted`);
  } else {
    res.status(404).send('Task not found');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});