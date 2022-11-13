import * as React from 'react';
import { BottomNavigation, Card, CardMedia, CircularProgress,Button, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import LabelBottomNavigation from '../components/bottomNav';
import '../shop.css'
import Checkbox from '@mui/material/Checkbox';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';




export default function SpendingCategory () {
    const [checked, setChecked] = React.useState(true);


    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
    
      const [open, setOpen] = React.useState(false);
    
      const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
    const [piggyFit, setPiggyFit] = React.useState('pigdef.gif');
    const style = {
        width: '100%',
        height: '80%',
        objectFit: 'contain',
        objectPosition: 'center'
    }

    return(
        <>
        <img height="300vh" src={require('../img/log.png')}></img>
        <img  height="300vh" src={require('../img/shinyPig.png')}></img>
        <br/>

        <FormControlLabel
        label="Essential"
        control={<Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                />}/>
                    <br/>

        <FormControl>
      <RadioGroup
        row
        defaultValue="credit"
        name="radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel value="credit" control={<Radio />} label="Credit" />
        <FormControlLabel value="debit" control={<Radio />} label="Debit" />
      </RadioGroup>
    </FormControl>
    <br/>
    <FormControl>
      <RadioGroup
        defaultValue="food"
        name="radio-buttons-group1"
        onChange={handleChange}
      >
        <FormControlLabel value="food" control={<Radio />} label="Food" />
        <FormControlLabel value="services" control={<Radio />} label="Services" />
        <FormControlLabel value="merchandise" control={<Radio />} label="Merchandise" />
        <TextField id="outlined-basic" label="Amount" variant="outlined" />
        <Button variant="outlined" onClick={handleClick}>Log item</Button>
      </RadioGroup>
    </FormControl>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Item succesfully logged!
        </Alert>
      </Snackbar>
<LabelBottomNavigation></LabelBottomNavigation>
        </>
    )
}