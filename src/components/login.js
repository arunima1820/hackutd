import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';

export default function Login() {
    const navigate = useNavigate();

  return (
    <>
    <img style={{
      paddingBottom:'20px',
      width: "600px",
      height:"400px",
    }} src={require('../img/logo.gif')}></img>
    <img style={{
      paddingBottom:'20px',
      position: 'absolute',
  top: '80px',
  right: '0',
    }
    } src={require('../img/shinyPig.png')}></img>
    
    <p>
      Welcome to your personalized budgeter and financial literacy teacher, that adapts to YOU!
    </p>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Username" variant="outlined" placeholder='Enter Username'/>
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Password" variant="outlined" placeholder='Enter Password'/>
    </Box>
    <IconButton onClick={() => navigate('/about')} color="primary" aria-label="upload picture" component="label">
         <img style={{objectFit: 'contain', height: '10vh'}} src={require('../img/login.png')}></img>
    </IconButton>
    

    </>
  );
}