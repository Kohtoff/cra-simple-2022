import React from 'react'
import { Box } from '@mui/material';


export default function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Box hidden={value !== index} {...other}>
        {value === index && <Box>{children}</Box>}
      </Box>
    );
  }
