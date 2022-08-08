import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

export default function FormRow(props) {
  const { data, children } = props;
  return (
    <>
      <Box sx={{ mt: '10px', maxWidth: '50%' }}>
        <Typography sx={{ mb: '40px' }} variant="h4">
          {data.title}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>{children}</Box>
      </Box>
      <Divider sx={{ mt: '20px' }} />
    </>
  );
}
