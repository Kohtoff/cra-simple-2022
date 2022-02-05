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
import { cartArray } from "../../data";

export default function GoodsItem(props) {
  const { data } = props;
  const { img, title, price, category, rating } = data;


  
  const addToBasket = (e) => {
    const indexOfAddedItem = cartArray.findIndex(item => item.id === data.id)
    console.log('INDEX', indexOfAddedItem)
    //DOESN`T WORK PROPERLY
    if( indexOfAddedItem !== -1) return;
    //   console.log('REPEAT DETECTED', cartArray[indexOfAddedItem].id)
    //   return cartArray[indexOfAddedItem].amount += 1
    // }
    cartArray.push({...data,amount: 1})
    console.log(cartArray);
  } 

  return (
    <Grid item xs={12} md={3} sx={{position:'relative'}}>
      <Card
        className="goods-card"
        sx={{
          borderRadius: "0",
          boxShadow: "none",
          maxHeight: "405px",
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
            onClick={({target}) => addToBasket(target)}
          >
            Add to basket
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
