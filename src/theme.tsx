import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: '#454545',
    },
    text:{
      primary: '#6e78a6',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    
  },
  spacing:8
});

export default theme;
