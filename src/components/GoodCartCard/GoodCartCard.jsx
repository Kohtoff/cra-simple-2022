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
import axios from "axios";

export default function GoodCartCard(props) {
  const { data } = props;
  const { id } = data;
  const [detailedInfo, setDetailedInfo] = useState(null);
  const dispatch = useDispatch();
  let [amount, setAmount] = useState(data.amount);


  const handleRemove = () => dispatch(removeFromCart({ id }));
  
  

  const totalPrice = () => {
    return detailedInfo.price * amount
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

  useEffect(() => {
    const getProductById = async (id) => {
      try {
        const res = await axios.get(
          `https://61f5558a62f1e300173c40f3.mockapi.io/products/${id}`
          );
          setDetailedInfo(res.data);
        } catch (err) {
          console.log("GET REQUEST ERROR:", err);
        }
      };
      getProductById(id);
    }, [id]);
    


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
        {detailedInfo ? (
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
              image={detailedInfo.photo + `?v=${id}` }
              sx={{ width: "80px", height: "auto" }}
              component="img"
              alt={detailedInfo.title}
              title={detailedInfo.title}
            />
            <CardContent>
              <Typography>{detailedInfo.title}</Typography>
              <Typography variant="subtitle2" sx={{ color: "#9c9c9c" }}>
                {detailedInfo.price} x {amount}
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
