import React, { useState } from "react";
import {
  Divider,
  Typography,
  Box,
  Button,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import BasketIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { cartArray } from "../../data";
import CartList from "../CartList/CartList";

export default function Cart(props) {
  const { handlerCloseDrawer } = props;
  const [totalPrice, setTotalPrice] = useState(0)
  

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
          {cartArray.length} item
        </Typography>
      </Box>
      <Divider />
      {cartArray.length <= 0 ? (
        <Typography sx={{ margin: "auto", textAlign: "center" }}>
          Seems like you don`t have any items
        </Typography>
      ) : (
        <>
          <CartList data={cartArray} setTotalSum={setTotalPrice}/>
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
