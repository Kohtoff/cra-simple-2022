import React, { useState } from "react";
import {
  Checkbox,
  Typography,
  List,
  ListItem,
  Button,
  Collapse,
  Switch,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { priceRange } from "../../data";
import PriceSlider from "../PriceSlider/PriceSlider";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  range: {
    alignItems: "flex-start",
  },
  open: {
    flexDirection: "column",
    alignItems: "stretch",
  },
});

export default function FilterItem({ data }) {
  const { type, title, options } = data;
  const [isOpen, setOpen] = useState(false);
  const { range, open } = useStyles();

  const handleToggleExpand = () => setOpen(!isOpen);

  const ConditionalWrapper = ({ wrapper, children }) =>
    type === "multiple checkboxes" ? wrapper(children) : children;

  const RenderFilter = () => {
    switch (type) {
      case "range":
        return <PriceSlider range={priceRange}></PriceSlider>;

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

      default:
        return <Switch />;
    }
  };

  return (
    <>
      <ListItem
        sx={{ justifyContent: "space-between" }}
        className={isOpen && type !== "checkbox" ? open : range}
      >
        <ConditionalWrapper
          wrapper={(children) => (
            <Button
              onClick={handleToggleExpand}
              fullWidth
              sx={{ borderRadius: "unset", justifyContent: "space-between" }}
              variant="text"
            >
              {children}
              {isOpen ? <ExpandLess /> : <ExpandMore />}
            </Button>
          )}
        >
          <Typography variant="button" align="center">
            {title}
          </Typography>
        </ConditionalWrapper>
        <ConditionalWrapper
          wrapper={(children) => (
            <Collapse
              in={isOpen}
              unmountOnExit
              easing={{
                enter: "cubic-bezier(0.4, 0, 0.2, 1)",
                exit: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              timeout={400}
            >
              {children}
            </Collapse>
          )}
        >
          <RenderFilter />
        </ConditionalWrapper>
      </ListItem>
    </>
  );
}
