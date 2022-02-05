import React, {useState} from "react";
import { Category, ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Button, Collapse } from "@mui/material";

export default function CategoriesDropdown(props) {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(!isOpen)} sx={{backgroundColor: 'search.bg', gap: '20px', '&:hover': {backgroundColor: 'aliceblue'}}}>
        <Category /> Categories {isOpen ? <ArrowDropUp /> : <ArrowDropDown/>}
      </Button>
      <Collapse
      sx={{position:'absolute', zIndex: '10', backgroundColor: 'white', boxShadow:'2'}}
      in={isOpen}
      unmountOnExit
      fullWidth
      orientation="vertical"
      >list of categories</Collapse>
    </>
  );
}
