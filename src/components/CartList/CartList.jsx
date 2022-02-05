import React from "react";
import {
  Divider,
  Typography,
  Box,
  List,
  Button,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import BasketIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { cartArray } from "../../data";
import GoodCartCard from "../GoodCartCard/GoodCartCard";

export default function CartList(props) {
    const {handlerOnClick} = props

    /*
    IT DOESN`T WORK. Reason: we haven`t amount of item in order

    const totalPrice = cartArray.reduce((prev, current) => {
       console.log(prev, 'DIVIDER', current.price)
        return prev += current.price
    }, 0) 
    */

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
      {cartArray.length < 0 ? (
        <Typography sx={{ margin: "auto", textAlign: "center" }}>
          Seems like you don`t have any items
        </Typography>
      ) : (
        <>
          <List sx={{height: '85%', overflow: 'auto'}}>
            {cartArray.map((item) => (
              <GoodCartCard key={item.id} data={item} />
            ))}
          </List>
          <Container >
            <Typography sx={{fontWeight: 'bold'}}>Total price: {/*totalPrice*/}</Typography>
            <Button variant="contained" onClick={() => handlerOnClick()} component={Link} to="/cart/order/1" fullWidth sx={{borderRadius: 'unset', background: "#245462"}}>Make Order</Button>
          </Container>
        </>
      )}
    </>
  );
}
