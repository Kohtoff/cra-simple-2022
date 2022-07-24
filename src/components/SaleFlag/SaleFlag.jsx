import React from 'react';
import { Box } from '@mui/system';
import SaleIcon from '@mui/icons-material/MonetizationOnOutlined';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  badgeItem: {
    backgroundColor: 'red',
    borderRadius: '25%',
    maxWidth: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    padding: '2px',
    transition: 'ease-in .3s all',
    whiteSpace: 'nowrap',

    '&:hover': {
      borderRadius: '130px',
      maxWidth: '300px',
    },
  },
  sale: {
    backgroundColor: 'green',
  },
});

export default function SaleFlag() {
  const classes = useStyles();
  return (
    <Box className={`${classes.badgeItem} ${classes.sale}`} disableSpacing>
      <SaleIcon sx={{ fill: '#fff' }} />{' '}
      <Typography sx={{ padding: '0 5px', fontSize: '14px', color: '#fff' }}>Sale</Typography>
    </Box>
  );
}
