import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import goalData from "../goals.json";
import { Checkbox, List, ListItemText } from '@mui/material';

export default function SimpleAccordion() {
    const [data, setData] = React.useState(goalData)
  return (
    <>
    {Object.keys(data).map((goal) => {
        console.log()
        return(
            <>
            <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>{Object.keys(data[goal])[0]}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <List>
                        <ListItemText><Checkbox color='success'/>{data[goal][Object.keys(data[goal])][0]}</ListItemText>
                        <ListItemText><Checkbox color='success' />{data[goal][Object.keys(data[goal])][1]}</ListItemText>
                        <ListItemText><Checkbox color='success' />{data[goal][Object.keys(data[goal])][2]}</ListItemText>
                    </List>
                </Typography>
                </AccordionDetails>
            </Accordion>
            </>
        )
    })}
    </>
  );
}