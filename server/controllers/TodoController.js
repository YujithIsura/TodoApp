module.exports = async () => {
    const Todo = require("./models/Todo");

    const errorHandler = err => {
        console.log("Error:", err);
    }

    post: (req, res) => {
        const todo = await Todo.create({
            taskName:req.body.taskName,
            taskDescription:req.body.taskDescription,
            fileName:req.body.fileName,
            filePath:req.body.filePath,
            status:"Todo"
        }).then(data => {
            res.send(data);
        })
        .catch(errorHandler);
    }
    
};