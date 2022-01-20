import { TextField } from "@mui/material";
import React from "react";

export default function SearchBar() {
  return (
    <TextField
      label="search"
      variant="standard"
      type="search"
      color="search"
      sx={{
        borderRadius: "1rem",
        overflow: "hidden",
        m: "20px 1vw",
        top: '-10px',
        width: '60%'

      }}
      inputProps={{
        sx: {
          backgroundColor: "search.bg",
          opacity: 0.5,
          borderRadius: "1rem",
          pl: "10px",
          pr: "10px",
        },
      }}
      InputLabelProps={{
        sx: {
          color: "search.label",
          pl: "10px",
          zIndex: 2,
          textTransform: "capitalize",
          shrink: true,
        },
      }}
    />
  );
}
