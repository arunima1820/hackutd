import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from "react-router-dom";


export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');
  const navigate = useNavigate()


  return (
    <BottomNavigation value={value} onChange={() => navigate('./' + value)}>
      <BottomNavigationAction
        label="Recents"
        value="about"
        icon={<img style={{marginTop:'50px', width:'100px'}} src={require('../img/coins.png')}/>}
      />
      <BottomNavigationAction
        label="Favorites"
        value="piggy"
        icon={<img style={{marginTop:'50px', width:'100px'}} src={require('../img/home.png')}/>}
      />
      <BottomNavigationAction
        label="Nearby"
        value="trackSpending"
        icon={<img style={{marginTop:'50px', width:'100px'}} src={require('../img/pig.png')}/>}
      />
      {/* <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
    </BottomNavigation>
  );
}