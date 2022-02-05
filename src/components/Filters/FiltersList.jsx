import React from "react";
import { filters as data } from "../../data";
import { Box, List, Divider, Typography } from "@mui/material";
import FilterItem from "../FilterItem/FilterItem";

export default function FiltersList() {
  return (
    <>
      <Typography variant="h4" sx={{ ml: "1vw" }}>
        Advanced Filters
      </Typography>
      <Divider />
      <Box role="presentation" sx={{ width: "500px" }}>
        <List>
          {data.map((filter) => (
            <FilterItem data={filter} key={filter.id} />
          ))}
        </List>
      </Box>
    </>
  );
}
