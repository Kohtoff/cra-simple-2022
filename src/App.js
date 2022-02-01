import React from "react";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider, Container } from "@mui/material";

import Header from "./components/Header/Header";
import {routesForRender} from './routesForRender';
import Page404 from "./pages/Page404";

export function App() {
  return (
    <div className="app">
      <Header />
      <Container sx={{ mt: "50px" }}>
        <Routes>
          {routesForRender.map(route =>{
            return  (
            <Route key={route.key} path={route.path} element={<route.element/>}/>
          )})}
          <Route path='*' element={<Page404 />}/>
        </Routes>
      </Container>
    </div>
  );
}
