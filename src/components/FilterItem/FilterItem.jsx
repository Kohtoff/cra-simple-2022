import React, { useState } from "react";
import {
  ListItemButton,
  Checkbox,
  Typography,
  Box,
  List,
  ListItem,
  Button,
  Divider,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { priceRange } from "../../data";
import PriceSlider from "../PriceSlider/PriceSlider";
import { Collapse } from "@mui/material";

export default function FilterItem({ data }) {
  const { id, type, title, options } = data;
  const [open, setOpen] = useState(false);

  const handleToggleExpand = () => setOpen(!open);

  const ConditionalWrapper = ({ wrapper, children }) =>
    type === "multiple checkboxes" ? wrapper(children) : children;

  const RenderFilter = () => {
    switch (type) {
      case "range":
        return <PriceSlider range={priceRange}></PriceSlider>;

      case "checkbox":
        return <Checkbox />;

      case "multiple checkboxes":
        return (
          <>
            <List sx={{ ml: "40px", display: "flex", flexDirection: "column" }}>
              {options.map((item) => (
                <ListItem
                  key={item.id}
                  sx={{ justifyContent: "space-between" }}
                >
                  <Typography component="label">{item.name}</Typography>
                  <Checkbox />
                </ListItem>
              ))}
            </List>
          </>
        );
    }
  };

  
  return (
    <>
    <ListItem sx={open && { display: "flex", justifyContent: "space-between", alignItems: 'stretch', flexDirection: 'column' } || type === 'range' && {flexDirection: 'column', alignItems: 'flex-start'}}>
      <ConditionalWrapper
        wrapper={(children) => (
          <Button
            onClick={handleToggleExpand}
            fullWidth
            sx={{ borderRadius: "unset", justifyContent: "space-between" }}
            variant="text"
          >
            {children}
            {open ? <ExpandLess /> : <ExpandMore />}
          </Button>
        )}
      >
        <Typography variant="button" align="center">
          {title}
        </Typography>
      </ConditionalWrapper>
        <ConditionalWrapper wrapper={(children) => (
          <Collapse in={open} unmountOnExit>
            {children}
          </Collapse>
        )}>
          <RenderFilter/>
        </ConditionalWrapper>
    </ListItem>
        </>
  );
}
