import React, { useState } from 'react'
import { Box, Grid, Typography, Divider } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const TodoForm = () => {
    const [alignment, setAlignment] = React.useState('Todo');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <List sx={{ width: '100%', justifyContent: 'center', bgcolor: 'background.paper' }}>
                <Grid justifyContent="center" direction="row" container >
                    <Grid item xs={12} sm={6} lg={3}>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {" — I'll be in your neighborhood doing errands this…"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </Grid>
                    <Grid marginTop={3} justifyContent="center" item xs={12} sm={6} lg={3}>
                        <Box textAlign='center'>
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                sx={{ alignItems: 'center' }}
                                size='small'
                                onChange={handleChange}
                                aria-label="Platform"
                            >
                                <ToggleButton value="Todo">Todo</ToggleButton>
                                <ToggleButton value="InProgress">In Progress</ToggleButton>
                                <ToggleButton value="Done">Done</ToggleButton>
                            </ToggleButtonGroup>
                        </Box>
                    </Grid>
                </Grid>
                <Divider variant="inset" component="li" />
            </List>
        </Box>
    )
}

export default TodoForm