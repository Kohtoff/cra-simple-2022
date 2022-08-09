import { Button, Input } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeAmount } from '../../ducks/cart.duck';

export default function QtyController(props) {
  const dispatch = useDispatch();
  let { amount, id } = props.data;
  const setAmount = props.handleOnChange;
  const { btnView } = props;

  const increment = () => {
    setAmount(++amount);
    dispatch(changeAmount({ id, amount }));
  };
  const decrement = () => {
    if (amount <= 1) return;
    setAmount(--amount);
    dispatch(changeAmount({ id, amount }));
  };

  const handleSetAmount = (value) => {
    const result = value.match(/\d+/);
    if (result < 0) {
      setAmount(1);
      return;
    }
    setAmount(result);
  };
  return (
    <>
      <Button variant={btnView ? btnView : 'text'} onClick={() => increment()}>
        +
      </Button>
      <Input
        value={amount}
        onChange={({ target }) => handleSetAmount(target.value)}
        sx={{ maxWidth: '50px', textAlign: 'center', input: { textAlign: 'center' } }}
      />
      <Button variant={btnView ? btnView : 'text'} sx={{ margin: 0 }} onClick={() => decrement()}>
        -
      </Button>
    </>
  );
}
