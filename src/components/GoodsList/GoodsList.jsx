import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import GoodsItem from "../GoodsItem/GoodsItem";


export default function GoodsList(props) {
  const { goods } = props;
  return (
    <>
      <Grid
        container
        sx={{
          mt: "100px",
          '& > div:last-child > div' : {
            "&:hover": {
              position: 'relative'
            }
          }
        }}
      >
        {goods.length > 0 ?
          goods
            .sort((prev, curr) => +curr.isInStock - +prev.isInStock)
            .map((item) => (
              <GoodsItem
                key={item.id}
                data={item}
                
              />
            )) : <CircularProgress color="inherit" variant="indeterminate" sx={{margin: 'auto'}}/>}
      </Grid>
      
    </>
  );
}
