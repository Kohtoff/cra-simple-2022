import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import BasketIcon from "@mui/icons-material/ShoppingBasket";
import Navbar from "../Navbar/Navbar";
import { routesConfig as routes } from "../../routesConfig";

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
        <Box>
          <Link to="/">
            <img
              style={{ width: "100px" }}
              src={process.env.PUBLIC_URL + "/Logo.svg"}
              alt="Logo"
            />
          </Link>
        </Box>
        <Navbar data={routes.filter((route) => route.isNavLink)} />

        <Box>
          <IconButton color="inherit">
            <PersonIcon />
          </IconButton>
          <IconButton color="inherit">
            <BasketIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
