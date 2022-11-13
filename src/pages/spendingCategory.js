import * as React from 'react';
import { BottomNavigation, Card, CardMedia, CircularProgress, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import LabelBottomNavigation from '../components/bottomNav';
import '../shop.css'
import Checkbox from '@mui/material/Checkbox';

export default function SpendingCategory () {
    const [checked, setChecked] = React.useState(true);

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
      </RadioGroup>
    </FormControl>
<LabelBottomNavigation></LabelBottomNavigation>
        </>
    )
}