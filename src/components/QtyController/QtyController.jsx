import { Button, Input } from "@mui/material";
import { margin, style, textAlign } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { changeAmount } from "../../ducks/cart.duck";

export default function QtyController(props) {
  const dispatch = useDispatch();
  let { amount, price, id } = props.data;
  const setAmount = props.handleOnChange;
  const { btnView } = props;
  const totalPrice = () => {
    return price * amount;
  };

  const increment = () => {
    setAmount(++amount);
    dispatch(changeAmount({ id, amount }));
    totalPrice();
  };
  const decrement = () => {
    if (amount <= 1) return;
    setAmount(--amount);
    dispatch(changeAmount({ id, amount }));
    totalPrice();
  };

  const handleSetAmount = (value) => {
    console.log(value);
    if (value < 0) {
      setAmount(1);
      return;
    }
    setAmount(value);
  };
  return (
    <>
      <Button variant={btnView ? btnView : "text"} onClick={() => increment()}>
        +
      </Button>
      <Input
        value={amount}
        onChange={({ target }) => handleSetAmount(target.value)}
        inputMode="tel"
        sx={{ maxWidth: "50px", textAlign: "center", input: {textAlign: 'center'}}}
        
      />
      <Button
        variant={btnView ? btnView : "text"}
        sx={{ margin: 0 }}
        onClick={() => decrement()}
      >
        -
      </Button>
    </>
  );
}
