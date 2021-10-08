const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Todolist = require('./Schema/TodoList');
const connectDB = require('./config/connector');

dotenv.config({ path: "./config/.env"});
const app = express();
app.use(express.json());

connectDB();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send("Heloo");
})

app.get('/api/v1/todolists', async (req, res) => {
  const todo = await Todolist.find().exec();
  res.status(200).json({
    success: true,
    data: todo
  });
});

app.get('/api/v1/todolist/:id', async (req, res) => {
  const todo = await Todolist.findById(req.params.id).exec();
  res.status(200).json({
    success: true,
    data: todo
  })
})

app.post('/api/v1/todolist', async (req,res) => {
  const todo = await Todolist.create(req.body);
  res.status(200).json({
    sucess: true,
    data: todo
  })
});

app.delete('/api/v1/todolist/:id', async (req,res) => {
  const todo = await Todolist.deleteOne({"_id": req.params.id});
  res.status(200).json({
    sucess: true,
    data: todo
  })
})

app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
});