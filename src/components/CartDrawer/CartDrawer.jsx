import React, {useState} from "react";
import BasketIcon from "@mui/icons-material/ShoppingBasket";
import { IconButton } from "@mui/material";
import Drawer from "../Drawer/Drawer";
import CartList from '../CartList/CartList'

export default function CartDrawer() {
    const [open, toggleOpen] = useState(false)

    
  return (
    <>
      <IconButton color="inherit" onClick={() => toggleOpen(true)}>
        <BasketIcon />
      </IconButton>
      <Drawer anchor={"right"} open={open} onBackdropClick={toggleOpen}>
        <CartList handlerOnClick={toggleOpen}/>
      </Drawer>
    </>
  );
}
