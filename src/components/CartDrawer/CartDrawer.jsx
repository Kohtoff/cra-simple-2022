import React, { useState } from "react";
import BasketIcon from "@mui/icons-material/ShoppingBasket";
import { IconButton, Badge } from "@mui/material";
import Drawer from "../Drawer/Drawer";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

export default function CartDrawer() {
  const [open, toggleOpen] = useState(false);
  const badgeValue = useSelector(state => state.cart.cartArray.length)
  

  return (
    <>
      <IconButton color="inherit" onClick={() => toggleOpen(true)}>
        <Badge badgeContent={`${badgeValue}`} color="warning">
          <BasketIcon />
        </Badge>
      </IconButton>
      <Drawer anchor={"right"} open={open} onBackdropClick={toggleOpen}>
        <Cart handlerCloseDrawer={toggleOpen} />
      </Drawer>
    </>
  );
}
