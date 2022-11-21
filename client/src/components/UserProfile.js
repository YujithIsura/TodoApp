import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Paper } from "@mui/material";
import TodoForm from './TodoForm';


const UserProfile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading..</div>
    }
    return (
        isAuthenticated && (
            <Box sx={{ flexGrow: 1 }} >
                <Paper variant="outlined" >
                    <TodoForm />
                </Paper>
            </Box>
        )
    )
}

export default UserProfile
