import React, { useState } from "react";
import { Divider, Typography, Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import BasketIcon from "@mui/icons-material/ShoppingBasketOutlined";
import CartList from "../CartList/CartList";
import { useSelector, useDispatch } from "react-redux";

export default function Cart(props) {
  const { handlerCloseDrawer } = props;
  const [totalPrice, setTotalPrice] = useState(0)
  const state = useSelector((state) => state.cart);
  const amountOfGoodsInCart = state.cartArray.length;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          ml: "1vw",
          mb: "20px",
          gap: "1vw",
          width: "400px",
        }}
      >
        <BasketIcon variant="outlined" sx={{ width: "32px", height: "32px" }} />{" "}
        <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
          {amountOfGoodsInCart} item
        </Typography>
      </Box>
      <Divider />
      {amountOfGoodsInCart <= 0 ? (
        <Typography sx={{ margin: "auto", textAlign: "center" }}>
          Seems like you don`t have any items
        </Typography>
      ) : (
        <>
          <CartList data={state.cartArray} 
          setTotalSum={setTotalPrice} 
          />
          <Container>
            <Typography sx={{ fontWeight: "bold" }}>
              Total price: {totalPrice}
            </Typography>
            <Button
              variant="contained"
              onClick={() => handlerCloseDrawer()}
              component={Link}
              to="/cart/order/1"
              fullWidth
              disabled={amountOfGoodsInCart > 0 ? false : true}
              sx={{ borderRadius: "unset", background: "#245462" }}
            >
              Make Order
            </Button>
          </Container>
        </>
      )}
    </>
  );
}
