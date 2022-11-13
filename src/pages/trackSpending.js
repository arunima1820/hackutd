import * as React from 'react';
import { BottomNavigation, Button, CircularProgress, TextField, Typography } from '@mui/material';
import LabelBottomNavigation from '../components/bottomNav';
import { useNavigate } from 'react-router-dom';

export default function TrackSpending () {
    const navigate = useNavigate()

    return(
        <>
            <img height="300vh" src={require('../img/track.png')}></img>
            <img height="300vh" src={require('../img/budgetdata.png')}></img>
            <br></br>
            <Button variant="outlined" color="success" onClick={() => navigate('/category')}>
                Log Spending
            </Button>
            <LabelBottomNavigation></LabelBottomNavigation>
        </>
    )
}