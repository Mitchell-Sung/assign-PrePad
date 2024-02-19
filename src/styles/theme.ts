import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3399cc',
      light: '#8cbad4',
    },
    background: {
      default: '#fafafa',
    },
    text: {
      primary: '#616161',
    },
  },
  typography: {
    fontFamily: `'Montserrat', sans-serif`,
  },
});

export default theme;
