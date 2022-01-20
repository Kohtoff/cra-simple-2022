import React, { useState } from "react";
import { Button, Drawer } from "@mui/material";
import { FilterAlt, SettingsInputAntenna } from "@mui/icons-material";
import FiltersList from "../Filters/FiltersList";

export default function FiltersDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      console.log("in if");
      return;
    } else if (event.target.localName !== "input" && event.target.localName !== "span") {
      setState({ ...state, [anchor]: open });
    }
  };

  const openDrawer = () => setState({ ...state, ["left"]: true });

  return (
    <>
      <Button onClick={openDrawer}>
        <FilterAlt />
        Advanced filters
      </Button>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <FiltersList sx={{ width: "300px" }} toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
}
