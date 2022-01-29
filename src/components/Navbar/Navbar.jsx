import React from "react";
import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const { data } = props;
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          display: { md: "flex", justifyContent: "space-between" },
        }}
      >
        {data.map((item) => (
          <Button
            component={NavLink}
            to={item.path }
            key={item.name}
            sx={{ my: 2, color: "primary.contrastText", display: "block", "active": {textTransform: 'underline'} }}
          >
            {item.name}
          </Button>
        ))}
      </Box>
    </div>
  );
}
