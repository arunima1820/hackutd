import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup({setIncomeType}) {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setIncomeType(event.target.value);
    };

  return (
    <FormControl>
      <FormLabel>Income Type</FormLabel>
      <RadioGroup
        row
        defaultValue="monthly"
        name="radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
        <FormControlLabel value="hourly" control={<Radio />} label="Hourly" />
        <FormControlLabel value="biweekly" control={<Radio />} label="Bi-Weekly" />
      </RadioGroup>
    </FormControl>
  );
}