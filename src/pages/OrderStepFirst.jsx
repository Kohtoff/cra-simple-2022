import React from 'react';
import { useSelector } from 'react-redux';
import GoodCartCard from '../components/GoodCartCard/GoodCartCard';
import GoodsList from '../components/GoodsList/GoodsList';


export default function OrderStepFirst() {
  const cartArray = useSelector(state => state.cart.cartArray)
  return <div>
    {cartArray.map((item) => <GoodCartCard key={item.id} data={item}></GoodCartCard>)}
  </div>;
}
