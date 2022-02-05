import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import BasketIcon from "@mui/icons-material/ShoppingBasket";
import Navbar from "../Navbar/Navbar";
import CartDrawer from '../CartDrawer/CartDrawer'
import { routesConfig as routes } from "../../router/routesConfig";

// const detectNavLinks = (routes) => routes.filter((route) => route.isNavLink)

export default function Header() {
  const navLinks = useMemo(() => {
    console.log('use memo execution');
    return routes.filter(route => route.isNavLink)}, [])

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

        <Navbar data={navLinks} />

        <Box>
          <IconButton color="inherit">
            <PersonIcon />
          </IconButton>
          <IconButton color="inherit">
            <BasketIcon />
          </IconButton>
          <CartDrawer></CartDrawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
