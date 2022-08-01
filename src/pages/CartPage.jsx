import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../components/Cart/Cart'

export default function CartPage() {
  const cartArray = useSelector((state) => state.cart.cartArray);
  console.log(cartArray);
  return (
    <div>
      <Box>
        <Cart mode={'page'}></Cart>
      </Box>
    </div>
  );
}
