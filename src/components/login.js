import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';

export default function Login() {
    const navigate = useNavigate();

  return (
    <>
    <img src={require('../img/title.png')}></img>
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