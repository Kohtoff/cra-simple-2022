import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Snackbar,
  Box,
} from "@mui/material";
import SaleIcon from "@mui/icons-material/MonetizationOnOutlined";
import NewGoodsIcon from "@mui/icons-material/NewReleasesOutlined";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import RatingSlider from "../RatingSlider/RatingSlider";
import { useDispatch } from "react-redux";
import { pushToCart } from "../../ducks/cart.duck";

const useStyles = makeStyles({
  outOfStock: { filter: "grayscale(1)" },
  card: {
    borderRadius: "0",
    boxShadow: "none",
    maxHeight: "405px",
    width: "100%",
    overflow: "hidden",
    transition: "all 0.15s ease-out",

    "&:hover": {
      position: "absolute",
      maxHeight: "none",
      zIndex: "2",
      boxShadow: "0px 1px 9px rgba(0, 0, 0, 0.11);",
      transition: "all 0.25s ease-in",
    },
  },
  badgeItem: {
    backgroundColor: "red",
    borderRadius: "25%",
    maxWidth: "28px",
    height: "28px",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    padding: "2px",
    transition: "ease-in .3s all",
    whiteSpace: "nowrap",

    "&:hover": {
      borderRadius: "130px",
      maxWidth: "300px",
    },
  },
  sale: {
    backgroundColor: "green",
  },
  badgeContainer: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "20px",
    left: "5px",
    gap: "10px",
  },
});

export default function GoodsItem(props) {
  const { data } = props;
  const {
    photo,
    title,
    price,
    category,
    rating,
    id,
    isInStock,
    isSale,
    isNew,
  } = data;
  const dispatch = useDispatch();
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const classes = useStyles();

  const handleAddToCart = () => {
    dispatch(pushToCart({id}));
    // dispatch(setPrice({id, price}))
    setSnackbarOpen(true);
  };

  return (
    <Grid item xs={12} md={4} lg={3} sx={{ position: "relative" }}>
      <Card className={`${classes.card}  ${!isInStock && classes.outOfStock}`}>
        {(isSale || isNew) && (
          <Box className={classes.badgeContainer} disableSpacing>
            {isSale ? (
              <Box
                className={`${classes.badgeItem} ${classes.sale}`}
                disableSpacing
              >
                <SaleIcon sx={{ fill: "#fff" }} />{" "}
                <Typography
                  sx={{ padding: "0 5px", fontSize: "14px", color: "#fff" }}
                >
                  Sale
                </Typography>
              </Box>
            ) : undefined}
            {isNew ? (
              <Box className={classes.badgeItem} disableSpacing>
                <NewGoodsIcon sx={{ fill: "#fff" }} />
                <Typography
                  sx={{ padding: "0 5px", fontSize: "14px", color: "#fff" }}
                >
                  New Position
                </Typography>
              </Box>
            ) : undefined}
          </Box>
        )}
        <CardMedia
          image={photo + `?v=${id}`}
          component="img"
          alt={title}
          title={title}
          sx={{ width: "100%", height: "auto" }}
        />
        <CardContent>
          <Typography
            variant="h6"
            component="h3"
            className={classes.title}
            noWrap
          >
            {title}
          </Typography>
          <Typography variant="subtitle2">{category}</Typography>
          <Typography variant="body1">Price: {price}$</Typography>
          <RatingSlider value={rating} readOnly={true} />
        </CardContent>
        <CardActions sx={{ flexDirection: "column" }} disableSpacing>
          <Button
            fullWidth
            variant="contained"
            sx={{ background: "#245462", borderRadius: 0 }}
            onClick={() => handleAddToCart()}
            disabled={isInStock ? false : true}
          >
            {isInStock ? "Add to basket" : "Out of stock"}
          </Button>
          <Button
            fullWidth
            variant="outlined"
            sx={{
              borderRadius: 0,
              mt: "20px",
              "&:hover": { color: "white", background: "#000" },
            }}
            component={Link}
            to={`/product/${id}`}
          >
            More Info
          </Button>
          <Snackbar
            open={isSnackbarOpen}
            autoHideDuration={3000}
            onClose={() => setSnackbarOpen(false)}
            message="Added to Cart"
          />
        </CardActions>
      </Card>
    </Grid>
  );
}
