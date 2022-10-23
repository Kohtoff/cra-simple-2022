import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { postOrder } from '../../api/CatalogApi'
import { resetCart } from '../../ducks/cart.duck';
import { resetOrder } from '../../ducks/order.duck';
import { useCart } from '../../hooks/useCart'
import { useOrder } from '../../hooks/useOrder';

export default function OrderFinish() {
  const cart = useCart();
  const order = useOrder();
  const dispatch = useDispatch()


  useEffect(() =>{
    postOrder({...order.customerData, cart: cart.cartArray })

    return () => {
      dispatch(resetCart())
      dispatch(resetOrder())
    }}, []
  )

  return (
    <div>OrderFinish</div>
  )
}

