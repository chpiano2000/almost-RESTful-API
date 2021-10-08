const mongoose = require('mongoose');

const TodolistSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  tag: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Todolist', TodolistSchema);