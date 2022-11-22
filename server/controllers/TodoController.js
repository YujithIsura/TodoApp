const db = require('../models');

// create main Model
const Todo = db.todos;

// Create a Todo
const insertTodo = async (req, res) => {
  const todos = {
          taskName:req.body.task,
          taskDescription:req.body.description,
          fileName:req.body.fileName,
          filePath:req.body.filePath,
          status:"Todo"
  };

  const todo = await Todo.create(todos);
  res.status(200).send(todo);
}

// update a Todo
const updateTodo = async (req, res) => {

  let id = req.params.id

  const todo = await Todo.update({ status: req.body.status }, { where: { id: id }})

  res.status(200).send(todo);
}

// delete product by id
const deleteTodo = async (req, res) => {

  let id = req.params.id
  
  await Todo.destroy({ where: { id: id }} )

  res.status(200).send('Todo is deleted !')
}

// get single Todo
const getOneTodo = async (req, res) => {

  let id = req.params.id
  let todo = await Todo.findOne({ where: { id: id }})
  res.status(200).send(todo)
}

// Get Todo List
const getTodoList = async (req, res) => {
  const todoList = await Todo.findAll({})
  res.status(200).send(todoList)
}

// Get Todo List By Status
const getTodoListByStatus = async (req, res) => {

  let status = req.params.status
  let todo = await Todo.findAll({ where: { status: status }})
  res.status(200).send(todo)
}



module.exports = {
  insertTodo,
  updateTodo,
  getTodoList,
  getOneTodo,
  deleteTodo,
  getTodoListByStatus
}