import React from "react";
import { Category, ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function CategoriesDropdown(props) {
  return (
    <>
      <Button sx={{backgroundColor: 'search.bg', gap: '20px', '&:hover': {backgroundColor: 'aliceblue'}}}>
        <Category /> Categories <ArrowDropDown />
      </Button>
    </>
  );
}
