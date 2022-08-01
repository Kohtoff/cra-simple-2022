import React from 'react';
import CartList from '../CartList/CartList';
import { useCart } from '../../hooks/useCart';

import TotalPrice from '../TotalPrice/TotalPrice';

export default function OrderProducts() {
  const cart = useCart();

  return (
    <>
      <CartList />
      <TotalPrice>{cart.totalPrice}</TotalPrice>
    </>
  );
}
