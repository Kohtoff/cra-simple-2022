import React from "react";
import {
  Box,
  IconButton,
  Menu,
  Typography,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
            key={item.name}
            sx={{ my: 2, color: "primary.contrastText", display: "block" }}
          >
            {item.name}
          </Button>
        ))}
      </Box>
    </div>
  );
}
