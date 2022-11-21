import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Paper } from "@mui/material";
import TodoForm from './TodoForm';
import FilterSection from './FilterSection';
import TodoList from './TodoList';



const UserProfile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading..</div>
    }
    return (
        isAuthenticated && (
            <Box sx={{ flexGrow: 1 }} >
                <Paper sx={{ marginBottom: 2 }} variant="outlined" >
                    <TodoForm />
                </Paper>
                <Paper sx={{ marginBottom: 2 }} variant="outlined" >
                    <FilterSection />
                </Paper>
                <Paper sx={{ marginBottom: 2 }} variant="outlined" >
                    <TodoList />
                </Paper>
            </Box>
        )
    )
}

export default UserProfile
