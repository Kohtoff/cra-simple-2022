import { Box } from '@mui/material'
import React from 'react'
import Cart from '../Cart/Cart'
import CartList from '../CartList/CartList'

export default function StickyWindow({children}) {

  return (
    <Box>
        <CartList
         />
    </Box>
  )
}

