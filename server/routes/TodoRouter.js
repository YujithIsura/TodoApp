const express = require('express');
const router = express.Router(); 
const insertTodo = require("../controllers/TodoController");

// router.get("/", controller.get); 
router.post("/", insertTodo.create);

module.exports = router;