import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { Button } from '@mui/material';
import LabelBottomNavigation from '../components/bottomNav';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function Reco(props) {
    const navigate = useNavigate();
    const [goal, setGoal] = useState(props.goalList);
    var nextPage = () => {
        navigate('/about')
        console.log("click")
    }
    
    

  return (
    <>
    
    
    <h1>Recomendations</h1>
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'grey', margin: 'auto' }}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Credit Score" secondary="Raising credit score can help you increase your borrowing amount" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Savings" secondary="Increasing your savings can help you have money in case of an emergency" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Credit Card" secondary="Using a credit card can help you build your credit score and earn points" />
      </ListItem>
    </List>

    
    </Box>
    <Button variant="outlined" onClick = {() => navigate('/trackSpending')}>Log Items</Button>
      
    
    {/* <IconButton onClick={() => navigate('/about')} color="primary" aria-label="upload picture" component="label">
         <img style={{objectFit: 'contain', height: '10vh'}} src={require('../img/login.png')}></img>
    </IconButton> */}
    <LabelBottomNavigation/>

    </>
  );
}