import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#221d23",
      contrastText: "#f3fcf0",
      activeFont: '#FCBA04',
    },
    search: {
        label: "#f3fcf0",
        bg: '#fff'

    }

  },
  shape: {
      borderRadius: 20
  },

});
