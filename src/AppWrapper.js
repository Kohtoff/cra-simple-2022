import React from "react";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { App } from "./App";
import { store } from "./redux/store";

export function AppWrapper() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
    </BrowserRouter>
  );
}
