import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import RatingSlider from "../RatingSlider/RatingSlider";

export default function GoodsItem(props) {
  const { data } = props;
  const { img, title, price, category, rating } = data;
  console.log(rating);
  return (
    <Grid item xs={12} md={3} sx={{position:'relative'}}>
      <Card
        className="goods-card"
        sx={{
          borderRadius: "0",
          boxShadow: "none",
          maxHeight: "380px",
          overflow: "hidden",
          transition: 'all 0.15s ease-out',

          '&:hover': {
            position: 'absolute',
            maxHeight: 'none',
            zIndex: '2',
            boxShadow: '0px 1px 9px rgba(0, 0, 0, 0.11);',
            transition: "all 0.25s ease-in",
          }
        }}
      >
        <CardMedia image={img} component="img" alt={title} title={title} />
        <CardContent>
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          <Typography variant="subtitle2">{category}</Typography>
          <Typography variant="body1">Price: {price}$</Typography>
          <RatingSlider value={rating} readOnly={true}/>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            sx={{ background: "#245462", borderRadius: 0 }}
          >
            Add to basket
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
