import React, { useState } from "react";
import { Button } from "@mui/material";
import { FilterAlt } from "@mui/icons-material";
import FiltersList from "../Filters/FiltersList";
import Drawer from "../Drawer/Drawer";

export default function FiltersDrawer() {
  const [open, toggleOpen] = useState(false);

  return (
    <>
      <Button onClick={() => toggleOpen(true)}>
        <FilterAlt />
        Advanced filters
      </Button>
      <Drawer anchor={"left"} open={open} onBackdropClick={toggleOpen}>
        <FiltersList  />
      </Drawer>
    </>
  );
}
