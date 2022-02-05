import React from "react";
import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    marginTop: 2,
    marginBottom: 2,
    display: "block",
    textAlign: "center",
  },
});
export default function Navbar(props) {
  const { data } = props;
  console.log(data);
  const { button } = useStyles();
  console.log('navbar render')
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          display: { md: "flex", justifyContent: "space-between" },
          '& .active':{textDecoration: 'underline'}
        }}
      >
        {data.map((item) => {
          console.log('nav link render')
          return (
          <Button
          component={NavLink}
          to={item.path}
          key={item.key}
          sx={{ color: "primary.contrastText",  }}
          className={button}

          >
            {item.key}
          </Button>
        )})}
      </Box>
    </div>
  );
}
