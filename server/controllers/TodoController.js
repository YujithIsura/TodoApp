exports.create = (req, res) => {
    const Todo = require("./models/Todo");

    // Validate request
    if (!req.body.taskName) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Todo
    const todos = {
      taskName:req.body.taskName,
            taskDescription:req.body.taskDescription,
            fileName:req.body.fileName,
            filePath:req.body.filePath,
            status:"Todo"
    };
  
    // Save Todo in the database
    Todo.create(todos)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Todo."
        });
      });
  };