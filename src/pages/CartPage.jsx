import React from 'react';
import { useSelector } from 'react-redux';
import CartList from '../components/CartList/CartList'

export default function CartPage() {
  const cartArray = useSelector(state => state.cart.cartArray)
  console.log(cartArray)
  return (<div>
    <CartList data={cartArray}></CartList>
  </div>);
}
