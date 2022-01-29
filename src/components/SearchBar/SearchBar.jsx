import { TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";
import "./SearchBar.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  input: {
    backgroundColor: "#fff",
    opacity: 0.5,
    borderRadius: "1rem",
    paddingLeft: "10px",
    paddingRight: "10px",

    "&:focus": {
      backgroundColor: "primary.contastText",
    },
  },
  label: {
    color: "#f3fcf0",
    paddingLeft: "10px",
    zIndex: 2,
    textTransform: "capitalize",
  },
});

export default function SearchBar() {
  const { input, label } = useStyles();

  return (
    <TextField
      label={
        <div className="search-label">
          <Search />
          <span>Search</span>
        </div>
      }
      variant="standard"
      type="search"
      color="search"
      sx={{
        borderRadius: "1rem",
        overflow: "hidden",
        m: "20px 1vw",
        top: "-10px",
        width: "60%",
      }}
      InputProps={{ className: input }}
      InputLabelProps={{ className: label }}
    />
  );
}
