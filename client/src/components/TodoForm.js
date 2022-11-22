import React, { useState, useEffect } from 'react'
import { Box, Grid, TextField, Button, styled } from '@mui/material';
import api from '../api/posts';

const TodoForm = (props) => {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const [file, setFile] = useState("");

    useEffect(() => {
        if (props.updateStatus) {
            const fetchTodo = async () => {
                try {
                    const response = await api.get(`/api/todo/${props.updateId}`);
                    debugger;
                    setTask(response.data.taskName);
                    setDescription(response.data.taskDescription);
                } catch (error) {
                    console.log("Error: ", error);
                }
            }
            fetchTodo();
        } 
    }, [])

    const handleUpdate = () => {

        if (!task) {
            setError("Please Enter Task Name");
            return;
        }
        if (!description) {
            setError("Please Enter Description");
            return;
        }
        UpdateItem();
    }

    const UpdateItem = async () => {
        const newTodo = {
            task: task,
            description: description,
            filename: '',
            filepath: '',
            status: "Todo"
        }
        try {
            const response = await api.put(`/api/todo/${props.updateId}`, { ...newTodo });
            const allTodos = [...props.todoList, response.data];
            props.setTodoList(allTodos);
            setTask('');
            setDescription('');
        } catch (error) {
            console.log("Error: ", error.response);
        }
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            {
                props.updateStatus ?
                    <Grid justifyContent="center" container spacing={2} p={2}>
                        <Grid item xs={12} sm={6} lg={3}>
                            <TextField value={task} onChange={(e) => { setTask(e.target.value) }}
                                error={!!props.error} helperText={props.error} id="outlined-basic" fullWidth label="Task Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <TextField value={description} onChange={(e) => { setDescription(e.target.value) }}
                                error={!!error} helperText={error} id="outlined-basic" fullWidth label="Task Description" multiline variant="outlined" />
                        </Grid>
                        <Grid marginTop={"15px"} item xs={12} sm={6} lg={3} >
                            <input type="file" name="file" onChange={(e) => { setFile(e.target.value) }} />
                        </Grid>
                        <Grid marginTop={"10px"} item xs={12} sm={6} lg={1}>
                            <Button variant="contained" color="primary" onClick={handleUpdate}>
                                Update
                            </Button>
                        </Grid>
                    </Grid> :
                    <Grid justifyContent="center" container spacing={2} p={2}>
                        <Grid item xs={12} sm={6} lg={3}>
                            <TextField value={props.task} onChange={(e) => { props.setTask(e.target.value) }}
                                error={!!props.error} helperText={props.error} id="outlined-basic" fullWidth label="Task Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <TextField value={props.description} onChange={(e) => { props.setDescription(e.target.value) }}
                                error={!!props.error} helperText={props.error} id="outlined-basic" fullWidth label="Task Description" multiline variant="outlined" />
                        </Grid>
                        <Grid marginTop={"15px"} item xs={12} sm={6} lg={3} >
                            <input type="file" name="file" onChange={(e) => { props.setFile(e.target.value) }} />
                        </Grid>
                        <Grid marginTop={"10px"} item xs={12} sm={6} lg={1}>
                            <Button variant="contained" color="primary" onClick={props.handleSave}>
                                Add
                            </Button>
                        </Grid>
                    </Grid>
            }
        </Box>
    )
}

export default TodoForm