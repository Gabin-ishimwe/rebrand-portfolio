import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ff4a57"
    },
    secondary: {
      main: "#1f2235"
    },
  },
  typography: {
    fontFamily: 'poppins, sans-serif'
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1f2235",

        }
      }
    }
  }
})
