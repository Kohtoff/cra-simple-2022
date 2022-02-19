import React, { useState, useEffect, useMemo } from "react";
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
import { CircularProgress } from "@mui/material";
import { removeFromCart, changeAmount } from "../../ducks/cart.duck";

export default function GoodCartCard(props) {
  const { data } = props;
  const { id, price, photo, title } = data;
  const [detailedInfo, setDetailedInfo] = useState(null);
  const dispatch = useDispatch();
  let [amount, setAmount] = useState(data.amount);


  const handleRemove = () => dispatch(removeFromCart({ id }));
  
  

  const totalPrice = () => {
    return price * amount
  }

  const increment = () => {
    setAmount(++amount);
    dispatch(changeAmount({ id, amount }));
    totalPrice()
  };
  const decrement = () => {
    if (amount === 1) return;
    setAmount(--amount);
    dispatch(changeAmount({ id, amount }));
    totalPrice()
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
        {data ? (
          <>
            <CardActions
              sx={{ flexDirection: "column", margin: 0 }}
              disableSpacing
            >
              <Button variant="text" onClick={() => increment()}>
                +
              </Button>
              {amount}
              <Button sx={{ margin: 0 }} onClick={() => decrement()}>
                -
              </Button>
            </CardActions>
            <CardMedia
              image={photo + `?v=${id}` }
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
              <Typography>₴{totalPrice()}</Typography>
            </CardContent>
            <CardActions sx={{ flexGrow: 1, justifyContent: "flex-end" }}>
              <IconButton onClick={() => handleRemove()}>
                <CloseIcon />
              </IconButton>
            </CardActions>
          </>
        ) : (
          <CircularProgress />
        )}
      </Card>
      <Divider />
    </>
  );
}
