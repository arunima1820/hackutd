import * as React from 'react';
import { useState } from 'react';
import { Box, Button, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';import { useNavigate } from 'react-router-dom';
import '../basicstyle.css'

export default function SurveyPage () {
    const [income, setIncome] = useState();
    const [incomeType, setIncomeType] = useState('monthly');
    const navigate = useNavigate()
    
  
    return(
        <>
        <img style={{paddingBottom:'20px',
        position: 'absolute',
    top: '80px',
    right: '50px'
      }} 
      alt=""
      src={require('../img/pigdef.gif')}></img>
    
        <img  style={{objectFit: 'contain', height: '10vh', margin: 'auto'}} src={require('../img/aboutme.png')}></img>
            <br />
        <Box sx={{ width: '100%', maxWidth: 360, margin: 'auto' }}>

        
            
            <div style={{
                width: '40vw', 
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <InputLabel htmlFor="outlined-adornment-amount">Value of Assets</InputLabel>
            <OutlinedInput
                id="outlined-adornment-amount"
                // onChange={handleChange('amount')}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Current Monthly Income"
            />
            <br></br>
            <FormControl>
            <FormLabel>Income Type</FormLabel>
            <RadioGroup
                row
                defaultValue="monthly"
                name="radio-buttons-group"
                onChange={(e) => setIncomeType(e.target.value)}
            >
                <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
                <FormControlLabel value="hourly" control={<Radio />} label="Hourly" />
                <FormControlLabel value="biweekly" control={<Radio />} label="Bi-Weekly" />
            </RadioGroup>
            </FormControl>
            <br></br>
            <InputLabel htmlFor="outlined-adornment-amount">Current {incomeType} Income</InputLabel>
            <OutlinedInput
                id="outlined-adornment-amount"
                // onChange={handleChange('amount')}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Current Monthly Income"
            />
                        <br></br>

            <InputLabel htmlFor="outlined-adornment-amount">Current Debt</InputLabel>
            <OutlinedInput
                id="outlined-adornment-amount"
                // onChange={handleChange('amount')}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Current Monthly Income"
            />
            <br></br>
            <br></br>
            <br></br>

            <Button variant="outlined" onClick={() => navigate('/goal')}>Next</Button>
            </div>
        </Box>

            {/* <IconButton onClick={() => navigate('/about')} color="primary" aria-label="upload picture" component="label">
         <img style={{objectFit: 'contain', height: '10vh'}} src={require('../img/login.png')}></img>
    </IconButton> */}
        </>
    )
}