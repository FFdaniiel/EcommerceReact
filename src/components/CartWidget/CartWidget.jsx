import { Box } from '@chakra-ui/react';
import React from 'react'
import { LuShoppingCart } from "react-icons/lu";

function CartWidget() {
  return (
    <Box mr={4} color={'#BBE1FA'} fontSize={'2rem'}>
      <LuShoppingCart />

    </Box>
  )
}

export default CartWidget