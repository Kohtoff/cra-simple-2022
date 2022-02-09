import React, { useState } from "react";
import {
  Divider,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { changeAmount, removeFromCart } from "../../redux/Cart/actions";

export default function GoodCartCard(props) {
  const { data } = props;
  const { id, img, title, price } = data;

  let [amount, setAmount] = useState(data.amount);
  const dispatch = useDispatch()
  const handleRemove = () => dispatch(removeFromCart(id))

  const increment = () => {
    setAmount(++amount)
    dispatch(changeAmount(id, amount))
  };
  const decrement = () => {
    if (amount === 1) return;
    setAmount(--amount);
    dispatch(changeAmount(id, amount))
  };
  

  return (
    <>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "unset",
          boxShadow: "0",
          width: "400px",
        }}
      >
        <CardActions sx={{ flexDirection: "column", margin: 0 }} disableSpacing>
          <Button variant="text" onClick={() => increment()}>
            +
          </Button>
          {amount}
          <Button sx={{ margin: 0 }} onClick={() => decrement()}>
            -
          </Button>
        </CardActions>
        <CardMedia
          image={img}
          sx={{ width: "80px", height: "auto" }}
          component="img"
          alt={title}
          title={title}
        />
        <CardContent>
          <Typography>{title}</Typography>
          <Typography variant="subtitle2" sx={{ color: "#9c9c9c" }}>
            {price} x {amount}
          </Typography>
          <Typography>₴{price * amount}</Typography>
        </CardContent>
        <CardActions sx={{ flexGrow: 1, justifyContent: "flex-end" }}>
          <IconButton onClick={() => handleRemove()}>
            <CloseIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Divider />
    </>
  );
}
