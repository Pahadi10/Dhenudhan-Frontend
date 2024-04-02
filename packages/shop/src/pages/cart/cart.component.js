import React, { useEffect, useState } from 'react'
import { styles } from './cart.style';
import { Box } from '@mui/material';

const Cart = () => {

  const isLoggedIn = sessionStorage.getItem('loggedIn') === "1"
  return (
    <Box sx={styles.menuRoot}>
    <div >{isLoggedIn ? 'Cart' : 'Login to view the cart'}</div>
    </Box>
  )
}

export default Cart