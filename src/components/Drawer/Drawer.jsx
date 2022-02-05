import React from "react";
import { Drawer as DrawerMUI } from "@mui/material";

export default function Drawer(props) {
  const {open, anchor, onBackdropClick, children} = props;
  return (
    <DrawerMUI
      variant="temporary"
      anchor={anchor}
      open={open}
      onBackdropClick={() => onBackdropClick()}
      SlideProps={{ sx: { paddingTop: "20px" } }}
    >
      {children}
    </DrawerMUI>
  );
}
