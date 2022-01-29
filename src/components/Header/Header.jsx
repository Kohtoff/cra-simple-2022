import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Container,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import BasketIcon from "@mui/icons-material/ShoppingBasket";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import CategoriesDropdown from "../CategoriesDropdown/CategoriesDropdown";
import { pages, categories } from "../../data";

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
        <Navbar data={pages} />

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
