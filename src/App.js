import React from "react";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider, Container } from "@mui/material";

import Header from "./components/Header/Header";
import {routesForRender} from './routesForRender'

export function App() {
  return (
    <div className="app">
      <Header />
      <Container sx={{ mt: "50px" }}>
        <Routes>
          {routesForRender.map(route => (
            <Route key={route.key} path={route.path} element={<route.element/>}/>
          ))}
        </Routes>
      </Container>
    </div>
  );
}
