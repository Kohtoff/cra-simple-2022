import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { App } from "./App";

export function AppWrapper() {
  return (
    <BrowserRouter>
     <CssBaseline/>
      <App />
    </BrowserRouter>
  );
}
