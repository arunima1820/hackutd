import * as React from 'react';
import { BottomNavigation, Card, CardMedia, CircularProgress, IconButton, TextField, Typography } from '@mui/material';
import LabelBottomNavigation from '../components/bottomNav';
import '../shop.css'

export default function Piggy () {
    const [piggyFit, setPiggyFit] = React.useState('pigdef.gif');
    const style = {
        width: '100%',
        height: '80%',
        objectFit: 'contain',
        objectPosition: 'center'
    }

    return(
        <>
        
        <img height="300vh" src={require('../img/shop.png')}></img>

        <img src={require('../img/' + piggyFit)}></img>
    
        <div class="grid">
        <div class="square fullImg">
        <IconButton onClick={() => setPiggyFit('monocle.png')}>
            <img src={require('../img/acc2.png')}/>
            </IconButton>
        </div>
        <div class="square fullImg">
            <img src={require('../img/acc3.png')}/>
        </div>
        <div class="square fullImg">
        <IconButton onClick={() => setPiggyFit('monoclehat.png')}>
            <img src={require('../img/acc4.png')}/>
            </IconButton>
            </div>
        {/* <div class="square fullImg">
            <img src="./img/acc2.png"/>
        </div>
        <div class="square fullImg">
            <img src="./img/acc3.png"/>
        </div>
        <div class="square fullImg">
            <img src="./img/acc4.png"/>
        </div> */}
    </div>
<LabelBottomNavigation></LabelBottomNavigation>
        </>
    )
}