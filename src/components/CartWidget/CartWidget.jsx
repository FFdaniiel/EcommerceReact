import { Box, Badge, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { FaShoppingCart  } from "react-icons/fa";
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const { getQuantity } = useContext(Context)
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={'1'} mr={4} color={'#fff'} fontSize={'3xl'} borderRadius={'1rem'} padding={'.4rem'}>
      <Flex justify={'center'} h={'50%'} w={'50%'} >
        <Badge textAlign={'center'} borderRadius={'1rem'} fontSize={'md'}>{getQuantity()}</Badge>
      </Flex>
      <Link to={'/cart'}>
        <FaShoppingCart />
      </Link>
    </Box>
  )
}

export default CartWidget