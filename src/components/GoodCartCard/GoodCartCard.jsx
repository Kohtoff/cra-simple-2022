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
import { CircularProgress } from "@mui/material";
import { removeFromCart, changeAmount } from "../../ducks/cart.duck";
import { Link } from "react-router-dom";
import QtyController from "../QtyController/QtyController";

export default function GoodCartCard(props) {
  const { data } = props;
  const { id, price, photo, title } = data;
  const dispatch = useDispatch();
  let [amount, setAmount] = useState(data.amount);

  const handleRemove = () => dispatch(removeFromCart({ id }));

  const totalPrice = () => {
    return price * amount;
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
              <QtyController data={{id, price, amount}} handleOnChange={setAmount} />
            </CardActions>
            <CardMedia
              image={photo + `?v=${id}`}
              sx={{ width: "80px", height: "auto" }}
              component="img"
              alt={title}
              title={title}
            />
            <CardContent>
              <Typography component={Link} to={`/product/${id}`}>
                {title}
              </Typography>
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
