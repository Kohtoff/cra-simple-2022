import React from "react";
import { ListItem, Checkbox, Typography, Box } from "@mui/material";
import { priceRange } from "../../data";
import PriceSlider from "../PriceSlider/PriceSlider";

export default function FilterItem({ data }) {
  const { id, type, title, options } = data;

  const renderFilter = () => {
    switch (type) {
      case "range":
        return <PriceSlider range={priceRange}></PriceSlider>;

      case "checkbox":
        return (
          <label>
            {title} <Checkbox />
          </label>
        );

      case "multiple checkboxes":
        return (
          <>
            <Typography component='label'>{title}</Typography>
            <Box sx={{ml: '40px', display:'flex'}}>
              {options.map((item) => (
                <Typography component='label' key={item.id}>
                  {item.name} <Checkbox />
                </Typography>
              ))}
            </Box>
          </>
        );
    }
  };
  return <ListItem sx={{display: 'block'}} key={id}>{renderFilter()}</ListItem>;
}
