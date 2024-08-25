const express = require('express');
const router = express.Router();

let todos = [];

// View To-Do List
router.get('/', (req, res) => {
  res.render('layout', { todos });
});

// Add a To-Do Item
router.post('/add', (req, res) => {
  const todo = req.body.todo;
  if (todo) {
    todos.push(todo);
  }
  res.redirect('/');
});

// Delete a To-Do Item
router.post('/delete', (req, res) => {
  const index = req.body.index;
  if (index >= 0 && index < todos.length) {
    todos.splice(index, 1);
  }
  res.redirect('/');
});

module.exports = router;
