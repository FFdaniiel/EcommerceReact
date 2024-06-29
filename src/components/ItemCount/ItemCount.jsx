import { Box, Button,Flex,Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity+1)
    }
  }
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <Box textAlign={'center'} m={'0'} color={'#BBE1FA'}>
      <Flex justify={'center'} mb={'.5rem'} >
        <Button margin={'0 3rem'} onClick={decrement}>
          -
        </Button>
        <Text color='blue.600' fontSize='2xl' >{quantity}</Text>
        <Button margin={'0 3rem'}  onClick={increment}>
          +
        </Button>
      </Flex>
      <Button
        textTransform={'UpperCase'}
        onClick={() => onAdd(quantity)}
        disabled={!stock}
        >
        Agregar al carrito
      </Button>
    </Box>
  )
}



export default ItemCount
