const express = require('express');
const router = express.Router(); 
const TodoController = require("../controllers/TodoController");

router.post("/insertTodo", TodoController.insertTodo);

router.get('/todoList', TodoController.getTodoList);

router.get('/todoList/:status', TodoController.getTodoListByStatus);

router.get('/:id', TodoController.getOneTodo);

router.put('/:id', TodoController.updateTodo);

router.delete('/:id', TodoController.deleteTodo)

module.exports = router;