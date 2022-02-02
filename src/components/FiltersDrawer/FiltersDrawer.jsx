import React, { useState } from "react";
import { Button, Drawer, Typography, Divider } from "@mui/material";
import { FilterAlt } from "@mui/icons-material";
import FiltersList from "../Filters/FiltersList";

export default function FiltersDrawer() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const openDrawer = () => setState({ ...state, ["left"]: true });

  return (
    <>
      <Button onClick={openDrawer}>
        <FilterAlt />
        Advanced filters
      </Button>
      <Drawer
        variant="temporary"
        anchor={"left"}
        open={state["left"]}
        onBackdropClick={() => setState({...state, ['left']: false})}

        SlideProps={{sx: {paddingTop: '20px'}}}
      >
        <Typography variant='h4' sx={{ml: '1vw'}}>Advanced Filters</Typography>
        <Divider/>
        <FiltersList sx={{ width: "300px" }} />
      </Drawer>
    </>
  );
}
