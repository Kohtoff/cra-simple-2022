import React from "react";
import { filters as data } from "../../data";
import { Box, List, ListItem, AppBar, Typography } from "@mui/material";
import FilterItem from "../FilterItem/FilterItem";

export default function FiltersList(props) {
  const { toggleDrawer } = props;
  return (
    <Box
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
      sx={{ width: "500px" }}
    >
      <List>
        {data.map((filter) => (
          <FilterItem data={filter} key={filter.id} />
        ))}
      </List>
    </Box>
  );
}
