import React, { useState } from "react";
import { Button, Drawer, Typography, Divider } from "@mui/material";
import { FilterAlt } from "@mui/icons-material";
import FiltersList from "../Filters/FiltersList";

export default function FiltersDrawer() {
  const [open, toggleOpen] = useState(false);


  const openDrawer = () => toggleOpen(!open)

  return (
    <>
      <Button onClick={openDrawer}>
        <FilterAlt />
        Advanced filters
      </Button>
      <Drawer
        variant="temporary"
        anchor={"left"}
        open={open}
        onBackdropClick={() => toggleOpen(!open)}

        SlideProps={{sx: {paddingTop: '20px'}}}
      >
        <Typography variant='h4' sx={{ml: '1vw'}}>Advanced Filters</Typography>
        <Divider/>
        <FiltersList sx={{ width: "300px" }} />
      </Drawer>
    </>
  );
}
