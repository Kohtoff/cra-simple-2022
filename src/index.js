import React from "react";
import ReactDOM from "react-dom";
import { AppWrapper } from "./AppWrapper";
import { ThemeProvider } from "@mui/material";
import { theme } from "./services/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppWrapper />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
