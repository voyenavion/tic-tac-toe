import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Square from './Square';
import Board from './Board';
import { AppBar, Divider, Input, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';



export default function App() {
  return (
    <Container sx={{flex:'1',width:'100%', height:'100%', flexFlow:'column', bgcolor:'default', paddingBottom:100}}>
      <AppBar enableColorOnDark position='fixed'>
    <Container maxWidth="xl" sx={{display:'flex', flexFlow:'row'}}>
      <Typography variant='h4' >
        Tic-Tac-Toe
      </Typography>
      </Container>
    </AppBar>
    <Toolbar />

    
    <Box sx={{ my: 4, display: "flex", justifyContent:"center" }}>
    <Board base={5} players={["X","O"]}/>
    </Box>

    </Container>
  );
}
