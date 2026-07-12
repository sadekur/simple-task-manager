const express = require('express');
const app = express();

const taskArr = [
    {
        id: 1,
        task: 'Complete project documentation',
    },
]

app.get('/', (req, res) => {
  res.send('Task Manager API');
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