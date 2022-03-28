import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Rating,
  Typography,
  CardActionArea,
  Button,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

export default function GoodItemPage() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [data, setData] = useState({});
  const { price, photo, title, isSale, isInStock, rating } = data;

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
            <CardContent sx={{position: 'relative', paddingBottom: 0, width: '100%'}}>
              <Typography variant="h3">{title}</Typography>
              <Typography variant="subtitle2">Rating:</Typography>
              <Rating
                readOnly
                value={rating / 10 / 2 || null}
                precision={0.1}
              />
              <Typography variant="h4" sx={{ fontWeight: 900 }} color="red">
                {price}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "bold" }}
                color={!isInStock && "red"}
              >
                {isInStock ? "Stock available" : "Out of stock"}
              </Typography>
              <Button
                disabled={!isInStock}
                sx={{
                  width: "95%",
                  mt: "40px",
                  padding: "8px 10px",
                  borderRadius: "0",
                  backgroundColor: "#245462",
                  color: "white",
                  position: 'absolute',
                  bottom: 0,

                  '&:disabled': {
                    backgroundColor: '#e4e4e4',
                    color: 'black'
                  }, 
                  
                  '&:hover': {
                    color: "#245462"
                  }
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
            </CardContent>
          </>
        ) : (
          <CircularProgress />
        )}
      </Card>
    </>
  );
}
