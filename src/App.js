import React from "react";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider, Container } from "@mui/material";

import Header from "./components/Header/Header";
import GoodsPage from "./pages/GoodsPage";

export function App() {
  return (
    <div className="app">
      <Header />
      <Container sx={{ mt: "50px" }}>
        <Routes>
          <Route path="/" element={<GoodsPage />} />
        </Routes>
      </Container>
    </div>
  );
}
