import { Box } from '@chakra-ui/react';
import React from 'react'
import { LuShoppingCart } from "react-icons/lu";

function CartWidget() {
  return (
    <Box display={'flex'} alignItems={'center'} gap={'1'} mr={4} color={'#fff'} fontSize={'1.3rem'}>
      0<LuShoppingCart />
    </Box>
  )
}

export default CartWidget