import React, { useEffect, useState } from 'react';
import { List, Typography } from '@mui/material';
import GoodCartCard from '../GoodCartCard/GoodCartCard';
import { getProductsFromCart } from '../../api/CatalogApi';
import { useCart } from '../../hooks/useCart';

export default function CartList() {
  const cart = useCart();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getProductsFromCart(cart.cartArray)
      .then((response) => setCartItems(response))
  }, [cart.cartArray]);

  return cart.cartArray.length <= 0 ? (
    <Typography sx={{ margin: 'auto', textAlign: 'center' }}>
      Seems like you don`t have any items
    </Typography>
  ) : (
    <List sx={{ height: '85%', overflow: 'auto' }}>
      {cart.cartArray.length > 0 &&
          cartItems.map((item) => <GoodCartCard  key={item.id} data={item} />)
        }
    </List>
  );
}
