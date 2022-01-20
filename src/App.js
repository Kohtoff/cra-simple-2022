import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, Container } from "@mui/material";
import Header from "./components/Header/Header";
import GoodsPage from "./components/GoodsPage/GoodsPage";
import FiltersDrawer from "./components/FiltersDrawer/FiltersDrawer";

export function App() {
  return (
    <div className="app">
      <Header />
      <Container sx={{mt: '200px'}}>
        <FiltersDrawer/>
        
        <GoodsPage />
      </Container>
    </div>
  );
}
