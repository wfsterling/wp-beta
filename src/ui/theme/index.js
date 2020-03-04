import { createMuiTheme } from '@material-ui/core/styles';


const palette = createMuiTheme({
  palette: {
    primary: {
      light: '#5931b7',
      main: '#1d0186',
      dark: '#000058',
      contrastText: '#fff',
    },
    secondary: {
      light: '#5de7e9',
      main: '#00b4b7',
      dark: '#008487',
      contrastText: '#000',
    },
  },
});
const themeName = 'IndigoTheoryTheme';

export default createMuiTheme({ palette, themeName });