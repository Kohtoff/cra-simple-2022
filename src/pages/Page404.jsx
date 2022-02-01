import React from 'react';
import { Typography, Box } from '@mui/material';

export default function Page404() {
  return (
      <Box sx={{textAlign: 'center'}}>
          <Typography variant='h2'>Your`re lost, traveller</Typography>
          <Typography variant='h6'>
              It means that page doesn`t exist.
              But don`t worry. We`ll help you. 
              <br/>
              Just use our navigation to return to our catalog and use search field to find the way
          </Typography>

      </Box>
  );
}
