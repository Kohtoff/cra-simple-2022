import React from 'react';
import { useCart } from '../../hooks/useCart';
import { useOrder } from '../../hooks/useOrder';
import { Divider, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function OrderConfirmation() {
  const order = useOrder();
  const cart = useCart();

  console.log(order.customerData);
  return (
    <div>
      <Typography variant="h6">Order summury</Typography>
      <Box>
        <List disablePadding>
          {cart.cartArray.map((product) => (
            <ListItem key={product.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <ListItemText primary={product.title} />
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                <Typography variant="body2">
                  {product.price} x {product.amount}
                </Typography>
                <Typography variant="body3"> {product.price * product.amount}$</Typography>
              </Box>
            </ListItem>
          ))}
          <Divider />
          <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ListItemText primary={'Total'} />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
              <Typography variant="body3"> {cart.totalPrice}$</Typography>
            </Box>
          </ListItem>
        </List>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6' gutterBottom>Shipping</Typography>
            <Typography gutterBottom>Reciver: {order.customerData.fullname}</Typography>
            <Typography gutterBottom>{ "Shipping point: " + order.customerData.country + ", "+ order.customerData.city}</Typography>
            <Typography gutterBottom>{"Adress: " + order.customerData.street + ' ' + order.customerData.house + '/' + order.customerData.apartments}</Typography>

          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6' gutterBottom>Payment details</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
