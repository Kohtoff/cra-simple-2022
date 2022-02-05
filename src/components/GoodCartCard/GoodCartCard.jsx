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

export default function GoodCartCard(props) {
  const { data, handleRemove, handleChangeAmount } = props;
  const { id, img, title, price } = data;
  let [amount, setAmount] = useState(1);

  const increment = () => {
    setAmount(++amount);
    handleChangeAmount(id, amount)
  };
  const decrement = () => {
    if (amount === 1) return;
    setAmount(--amount);
    handleChangeAmount(id, amount)
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
          <IconButton onClick={() => handleRemove(id)}>
            <CloseIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Divider />
    </>
  );
}
