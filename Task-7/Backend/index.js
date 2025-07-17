const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

// Get all todos
app.get('/todos', async (req, res) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
});

// Add todo
app.post('/todos', async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) return res.status(400).send("Missing fields");

  const todo = await prisma.todo.create({ data: { title, description } });
  res.json(todo);
});

// Update todo
app.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const updated = await prisma.todo.update({
    where: { id: Number(id) },
    data: { title, description },
  });
  res.json(updated);
});

// Delete todo
app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.todo.delete({ where: { id: Number(id) } });
  res.sendStatus(204);
});

app.listen(3000, () => console.log(' Backend running on http://localhost:3000'));
