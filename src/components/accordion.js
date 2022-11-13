import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import goalData from "../goals.json";
import { Checkbox, List, ListItem, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import PaymentsIcon from '@mui/icons-material/Payments';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

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
                <Typography variant="h5">{Object.keys(data[goal])[0]}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <List>
                        <ListItem>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText><Checkbox color='success'/>{data[goal][Object.keys(data[goal])][0]}</ListItemText>
                        </ListItem>
                        <ListItem>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText><Checkbox color='success'/>{data[goal][Object.keys(data[goal])][1]}</ListItemText>
                        </ListItem>
                        <ListItem>
                        <ListItemIcon>
                            <PaymentsIcon />
                        </ListItemIcon>
                        <ListItemText><Checkbox color='success'/>{data[goal][Object.keys(data[goal])][2]}</ListItemText>
                        </ListItem>
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