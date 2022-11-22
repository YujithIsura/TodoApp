import React, { useState, useEffect, useRef } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Paper } from "@mui/material";
import TodoForm from './TodoForm';
import FilterSection from './FilterSection';
import TodoList from './TodoList';
import api from '../api/posts';


const UserProfile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    const [error, setError] = useState("");
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [alignment, setAlignment] = useState('Todo');
    const ref = useRef(null);

    useEffect(() => {
        const fetchTodoList = async () => {
            try {
                const response = await api.get('/api/todo/todoList');
                setTodoList(response.data);
            } catch (error) {
                console.log("Error: ", error);
            }
        }
        fetchTodoList();
    }, [])

    const handleSave = () => {
        if (!task) {
            setError("Please Enter Task Name");
            return;
        }
        if (!description) {
            setError("Please Enter Description");
            return;
        }
        AddItem();
    }

    const getOneTodo = async (id) => {
            try {
                const response = await api.get(`/api/todo/${id}`);
                debugger;
                setTask(response.data.taskName);
                setDescription(response.data.taskDescription);
            } catch (error) {
                console.log("Error: ", error);
            }
    }

    const AddItem = async () => {
        const newTodo = {
            task: task,
            description: description,
            filename: '',
            filepath: '',
            status: "Todo"
        }
        try {
            const response = await api.post('/api/todo/insertTodo', { ...newTodo });
            const allTodos = [...todoList, response.data];
            setTodoList(allTodos);
            setTask('');
            setDescription('');
        } catch (error) {
            console.log("Error: ", error.response);
        }
    };

    //toggle button change function
    const handleChange = async (e) => {
        try {
            const newTodoStatus = {
                status: e.target.value
            }
            const response = await api.put(`/api/todo/${ref.current.id}`, { ...newTodoStatus });
            updateState(newTodoStatus.status,ref.current.id);
        } catch (error) {
            console.log("Error: ", error.response);
        }
    };

    const updateState = (status,id) => {
        debugger;
        const newState = todoList.map(obj => {
          // if id equals current id, update status property
          if (obj.id == id) {
            return {...obj, status: status};
          }
    
          // otherwise return object as it is
          return obj;
        });
    
        setTodoList(newState);
      };

      const handleDelete = async (id) => {
        try {
            const response = await api.delete(`/api/todo/${id}`, {});
            setTodoList(current =>
                  current.filter(todo => {
                    // 👇️ remove object that has id equal to 2
                    return todo.id !== id;
                  }),
                );
        } catch (error) {
            console.log("Error: ", error.response);
        }
    };

    if (isLoading) {
        return <div>Loading..</div>
    }
    return (
        isAuthenticated && (
            <Box sx={{ flexGrow: 1 }} >
                <Paper sx={{ marginBottom: 2 }} variant="outlined" >
                    <TodoForm
                        AddItem={AddItem}
                        setTask={setTask}
                        setDescription={setDescription}
                        handleSave={handleSave}
                        setError={setError}
                        setFile={setFile}
                        task={task}
                        description={description}
                        file={file}
                        error={error}
                    />
                </Paper>
                <Paper sx={{ marginBottom: 2 }} variant="outlined" >
                    <FilterSection />
                </Paper>
                <Paper sx={{ marginBottom: 2 }} variant="outlined" >
                    <TodoList
                        todoList={todoList}
                        handleChange={handleChange}
                        handleDelete={handleDelete}
                        newref={ref}
                        getOneTodo={getOneTodo}
                        setTodoList={setTodoList}
                    />
                </Paper>
            </Box>
        )
    )
}

export default UserProfile
