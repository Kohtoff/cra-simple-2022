import React, { useEffect, useState } from 'react';
import { CircularProgress, List, Typography } from '@mui/material';
import GoodCartCard from '../GoodCartCard/GoodCartCard';
import { getProductsFromCart } from '../../api/CatalogApi';
import { useCart } from '../../hooks/useCart';

export default function CartList(props) {
  const cart = useCart();
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProductsFromCart(cart.cartArray)
      .then((response) => setCartItems(response))
      .then(() => setLoading(false));
  }, [cart.cartArray]);

  return cart.cartArray.length <= 0 ? (
    <Typography sx={{ margin: 'auto', textAlign: 'center' }}>
      Seems like you don`t have any items
    </Typography>
  ) : (
    <List sx={{ height: '85%', overflow: 'auto' }}>
      {cart.cartArray.length > 0 &&
        (isLoading ? (
          <CircularProgress
            sx={{
              position: 'relative',
              top: '50%',
              left: '50%',
              translate: 'transform(-50%, -50%)',
            }}
          />
        ) : (
          cartItems.map((item) => <GoodCartCard key={item.id} data={item} />)
        ))}
    </List>
  );
}
