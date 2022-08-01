import React from 'react';
import { Typography } from '@mui/material';

export default function TotalPrice({ children }) {
  return <Typography sx={{ fontWeight: 'bold' }}>Total price: {children}</Typography>;
}
