import React, { useState, useEffect } from "react";
import { Divider, Typography, Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import BasketIcon from "@mui/icons-material/ShoppingBasketOutlined";
import CartList from "../CartList/CartList";
import { useCart } from "../../hooks/useCart";
import { useDispatch } from "react-redux";
import { resetCart } from "../../ducks/cart.duck";
import { useTotalPrice } from '../../hooks/useTotalPrice';
import axios from 'axios'

export default function Cart(props) {
  const { handlerCloseDrawer } = props;
  const [cartItems, setCartItems] = useState([])
  const cart = useCart();
  const totalPrice = useTotalPrice(cartItems)
  const amountOfGoodsInCart = cart.cartArray.length;
  const dispatch = useDispatch();
  const handlerResetCart = () => dispatch(resetCart({ defaultState: cart }));

  useEffect(() => {
    axios.all(
      cart.cartArray.map(async (item) => {
        return await axios
        .get(`https://61f5558a62f1e300173c40f3.mockapi.io/products/${item.id}`)
        .then((response) => ( {...response.data, amount: item.amount}  ))
      })
    ).then((response) => {
      setCartItems(response)
    })
  }, [cart.cartArray])

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
          <CartList
            data={cart.cartArray}
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
            <Button
              variant="contained"
              onClick={() => handlerResetCart()}
              fullWidth
              disabled={amountOfGoodsInCart > 0 ? false : true}
              sx={{
                borderRadius: "unset",
                background: "#221d23",
                color: "white",
                mt: "10px",
                "&:hover": { backgroundColor: "red" },
              }}
            >
              reset Cart
            </Button>
          </Container>
        </>
      )}
    </>
  );
}
