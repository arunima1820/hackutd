import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { Button } from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import PaymentsIcon from '@mui/icons-material/Payments';

export default function Login() {
    const navigate = useNavigate();
    const [goal, setGoal] = useState();
    var nextPage = () => {
        navigate('/reco')
        console.log("click")
    }
    
    

  return (
    <>
    
    
    <h1>Goals</h1>
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'grey', margin: 'auto' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() =>nextPage()} >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Future Proof Against Recession" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() =>nextPage()}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Accumlate Wealth" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() =>nextPage()}>
              <ListItemIcon>
                <PaymentsIcon />
              </ListItemIcon>
              <ListItemText primary="Save money" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      
    </Box>
    
    {/* <IconButton onClick={() => navigate('/about')} color="primary" aria-label="upload picture" component="label">
         <img style={{objectFit: 'contain', height: '10vh'}} src={require('../img/login.png')}></img>
    </IconButton> */}
    </>
  );
}