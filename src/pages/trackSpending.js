import * as React from 'react';
import { BottomNavigation, CircularProgress, TextField, Typography } from '@mui/material';
import LabelBottomNavigation from '../components/bottomNav';

export default function TrackSpending () {
    return(
        <>
            <Typography variant="h1">Track Spending</Typography>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <CircularProgress variant="determinate" value={25} />
            {/* <LabelBottomNavigation></LabelBottomNavigation> */}
        </>
    )
}