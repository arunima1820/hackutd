import * as React from 'react';
import { useState } from 'react';
import { Button, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import RadioButtonsGroup from '../components/radioGroup';
import { useNavigate } from 'react-router-dom';

export default function SurveyPage2 () {
    const [income, setIncome] = useState();
    const [incomeType, setIncomeType] = useState();
    const navigate = useNavigate()

    return(
        <>
            <img  style={{objectFit: 'contain', height: '10vh'}} src={require('../img/aboutme.png')}></img>
            <br />
            
        </>
    )
}