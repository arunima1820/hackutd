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
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import PaymentsIcon from '@mui/icons-material/Payments';
import SimpleAccordion from '../components/accordion';

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
    <SimpleAccordion />
    <LabelBottomNavigation/>

    </>
  );
}