import React, { useState } from 'react'
import { Box, Grid, TextField, Button, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TodoForm = () => {
    const [error, setError] = useState("");
    const [from, setFrom] = useState(dayjs('2014-08-18T21:11:54'));
    const [to, setTo] = useState(dayjs('2014-08-18T21:11:54'));



    const handleChangeFrom = (newValue) => {
        setFrom(newValue);
    };
    const handleChangeTo = (newValue) => {
        setTo(newValue);
    };

    const AddItem = () => {

    };

    const handleClickFilter = () => {
        // if (task.length === 0) {
        //     setError("Please enter title");
        //     return;
        // }
        AddItem();
    }
    const handleClickCheckBox = (e) => {
        if(e.target.value && e.target.checked){

        }
        debugger;
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid justifyContent="center" container spacing={2} p={2}>
                <Grid item xs={12} sm={6} lg={3}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox value="Todo" defaultChecked onClick={handleClickCheckBox}  />} label="Todo" />
                        <FormControlLabel control={<Checkbox />} label="In Progress" />
                        <FormControlLabel control={<Checkbox />} label="Done" />
                    </FormGroup>
                </Grid>
                <Grid marginTop={5} item xs={12} sm={6} lg={3}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            label="From Date"
                            inputFormat="MM/DD/YYYY"
                            value={from}
                            onChange={handleChangeFrom}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid marginTop={5} item xs={12} sm={6} lg={3} >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            label="To Date"
                            inputFormat="MM/DD/YYYY"
                            value={to}
                            onChange={handleChangeTo}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid marginTop={6} item xs={12} sm={6} lg={1}>
                    <Button variant="contained" color="primary" onClick={handleClickFilter}>
                        Filter
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TodoForm