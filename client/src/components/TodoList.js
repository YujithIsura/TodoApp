import React, { useState } from 'react'
import { Box, Grid, Typography, Divider, Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TodoForm from './TodoForm';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const TodoList = () => {
    const [alignment, setAlignment] = useState('Todo');
    const [state, setState] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    let todoList = [
        {
            "id": "1",
            "task": "purple",
            "description": "minivan",
            "file": "ff",
            "status": "Todo"
        },
        {
            "id": "2",
            "task": "purple",
            "description": "minivan",
            "file": "ff",
            "status": "Todo"
        }
    ]

    const list = () => (
        <Box
            sx={{ width: 'auto', padding: 10 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <TodoForm />
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            {todoList.map((anchor) => (
                <React.Fragment key={anchor.id}>
                    <List sx={{ width: '100%', justifyContent: 'center', bgcolor: 'background.paper' }}>
                        <Grid justifyContent="center" direction="row" container >
                            <Grid item xs={12} sm={6} lg={4}>
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
                            <Grid marginTop={2} justifyContent="center" item xs={12} sm={6} lg={3}>
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
                            <Grid marginTop={3} justifyContent="center" item xs={12} sm={6} lg={2}>
                                <Box textAlign='center'>
                                    <IconButton onClick={toggleDrawer(true)} aria-label="edit">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={handleClickOpen} aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            </Grid>
                        </Grid>
                        <Drawer
                            anchor="top"
                            open={state}
                            onClose={toggleDrawer(false)}
                        >
                            {list()}
                        </Drawer>
                        <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle>{"Delete"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    Are you sure you want to delete this item?
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button color="error" onClick={handleClose}>Delete</Button>
                            </DialogActions>
                        </Dialog>
                        <Divider variant="inset" component="li" />
                    </List>
                </React.Fragment>
            ))}
        </Box>
    )
}

export default TodoList