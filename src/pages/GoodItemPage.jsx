import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Rating,
  Typography,
  Button,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { pushToCart, removeFromCart } from "../ducks/cart.duck";
import GoodTabs from "../components/GoodTabs/GoodTabs";
import QtyController from "../components/QtyController/QtyController";
import { Box } from "@mui/system";

export default function GoodItemPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [data, setData] = useState({});
  const cartArray = useSelector((state) => state.cart.cartArray);
  const { price, photo, title, isInStock, rating, description } = data;
  const [isInCart, toggleIsInCart] = useState(
    cartArray.find((item) => item.id === id) || false
  );

  let [amount, setAmount] = useState(
    isInCart ? cartArray.find((item) => item.id === id).amount : 1
  );

  const handleAddToCart = (id) => {
    console.log(id);
    dispatch(pushToCart({ id }));
    toggleIsInCart(true);
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
    toggleIsInCart(false);
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `https://61f5558a62f1e300173c40f3.mockapi.io/products/${id}`
        );
        setData(res.data);
      } catch (err) {
        console.log("!ERROR", err);
      }
    };
    getProduct();
  }, [id]);
  console.log(data);

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          borderRadius: 0,
          boxShadow: "none",
        }}
      >
        {data ? (
          <>
            <CardMedia
              image={photo + `?v=${id}`}
              component="img"
              alt={title}
              title={title}
              sx={{ width: "40%", height: "auto" }}
            />
            <CardContent
              sx={{ position: "relative", paddingBottom: 0, width: "100%" }}
            >
              <Typography variant="h3">{title}</Typography>
              <Typography variant="subtitle2">Rating:</Typography>
              <Rating
                readOnly
                value={rating / 10 / 2 || null}
                precision={0.1}
              />
              <Typography variant="h4" sx={{ fontWeight: 900 }} color="red">
                {price}{" "}
                {isInCart && (
                  <Typography variant="sapn" color="#ababab">
                    x {`${amount}`}
                  </Typography>
                )}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "bold" }}
                color={!isInStock && "red"}
              >
                {isInStock ? "Stock available" : "Out of stock"}
              </Typography>
              {isInCart && (
                <Typography variant="h5" color="black">
                  Total price: {amount * price}
                </Typography>
              )}

              {!isInCart ? (
                <Button
                  disabled={!isInStock}
                  onClick={() => handleAddToCart(id)}
                  sx={{
                    width: "95%",
                    mt: "40px",
                    padding: "8px 10px",
                    borderRadius: "0",
                    backgroundColor: "#245462",
                    color: "white",
                    position: "absolute",
                    bottom: 0,

                    "&:disabled": {
                      backgroundColor: "#e4e4e4",
                      color: "black",
                    },

                    "&:hover": {
                      color: "#245462",
                    },
                  }}
                >
                  {isInStock ? (
                    <>
                      <ShoppingCart sx={{ marginRight: "0.7vw" }} /> Add to cart{" "}
                    </>
                  ) : (
                    "Out of stock :("
                  )}
                </Button>
              ) : (
                <Box sx={{ alignItems: "baseline" }}>
                  <QtyController
                    data={{ id, price, amount }}
                    handleOnChange={setAmount}
                  />
                  <Button
                    color="error"
                    variant="contained"
                    onClick={() => handleRemove(id)}
                    sx={{ mt: "20px", display: "block" }}
                  >
                    Delete from cart
                  </Button>
                </Box>
              )}
            </CardContent>
          </>
        ) : (
          <CircularProgress />
        )}
      </Card>
      <GoodTabs
        tabs={[{ title: "description", children: description }, "reviews"]}
      />
    </>
  );
}
