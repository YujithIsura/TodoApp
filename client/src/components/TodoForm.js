import React, { useState } from 'react'
import { Box, Grid, TextField, Button, styled } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const TodoForm = () => {
    const { error, setError } = useState("");
    const { task, setTask } = useState("");
    const { description, setDescription } = useState("");
    const { file, setFile } = useState("");

    const AddItem = () => {

    };

    const handleClick = () => {
        if (task.length === 0) {
            setError("Please enter title");
            return;
        }
        AddItem();
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid justifyContent="center" container spacing={2} p={2}>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField value={task} onChange={(e) => { setTask(e.target.value) }}
                        error={!!error} helperText={error} id="outlined-basic" fullWidth label="Task Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField value={description} onChange={(e) => { setDescription(e.target.value) }}
                        error={!!error} helperText={error} id="outlined-basic" fullWidth label="Task Description" multiline variant="outlined" />
                </Grid>
                <Grid marginTop={"15px"} item xs={12} sm={6} lg={3} >
                    <input type="file" name="file" onChange={(e) => { setFile(e.target.value) }} />
                </Grid>
                <Grid marginTop={"10px"} item xs={12} sm={6} lg={1}>
                    <Button variant="contained" color="primary" onClick={handleClick}>
                        Add
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TodoForm