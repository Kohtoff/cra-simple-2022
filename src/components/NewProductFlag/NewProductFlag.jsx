import React from 'react';
import { Box, Typography } from '@mui/material';
import NewGoodsIcon from '@mui/icons-material/NewReleasesOutlined';
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
});

export default function NewProductFlag() {
  const classes = useStyles();
  return (
    <Box className={classes.badgeItem} disableSpacing>
      <NewGoodsIcon sx={{ fill: '#fff' }} />
      <Typography sx={{ padding: '0 5px', fontSize: '14px', color: '#fff' }}>
        New Position
      </Typography>
    </Box>
  );
}
