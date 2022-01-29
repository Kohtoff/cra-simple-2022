import React from "react";
import { AppBar, Toolbar, IconButton, Box, Container, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import BasketIcon from "@mui/icons-material/ShoppingBasket";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import CategoriesDropdown from "../CategoriesDropdown/CategoriesDropdown";
import { pages, categories } from "../../data";


export default function Header() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <SearchBar></SearchBar>
        <Box>
          <IconButton color="inherit">
            <PersonIcon />
          </IconButton>
          <IconButton color="inherit">
            <BasketIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Divider sx={{background: '#3c3535'}}/>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <CategoriesDropdown data={categories}></CategoriesDropdown>
          <Navbar data={pages} />
        </Container>
      </Toolbar>
    </AppBar>
  );
}
