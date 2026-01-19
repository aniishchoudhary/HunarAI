import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue shade from the design header/buttons
    },
    background: {
      default: '#f5f5f5', // Light grey background
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none', // Buttons in design look like they have normal casing or specific casing, avoiding all-caps default
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Modern rounded corners
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
      },
    },
    MuiSelect: {
        defaultProps: {
            size: 'small',
        }
    }
  },
});

export default theme;
