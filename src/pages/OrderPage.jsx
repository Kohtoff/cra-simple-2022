import React from 'react';
import { useSelector } from 'react-redux';
import GoodsList from '../components/GoodsList/GoodsList';

export default function OrderPage() {
  const cartArray = useSelector(state => state.cart.cartArray)
  console.log(cartArray)
  return <div>

  </div>;
}
