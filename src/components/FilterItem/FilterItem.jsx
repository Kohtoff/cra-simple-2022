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
        break;

      case "checkbox":
        return (
          <label>
            {title} <Checkbox />
          </label>
        );
        break;

      case "multiple checkboxes":
        return (
          <>
            <label>{title}</label>
            <Box sx={{ml: '40px'}}>
              {options.map((item) => (
                <label key={item.id}>
                  {item.name} <Checkbox />
                </label>
              ))}
            </Box>
          </>
        );
        break;
    }
  };
  return <ListItem sx={{display: 'block'}} key={id}>{renderFilter()}</ListItem>;
}
