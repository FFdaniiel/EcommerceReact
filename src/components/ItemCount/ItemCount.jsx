import { Box, Button,Flex,Text, Link as ChrakraLink} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from "react-router-dom";

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
      {
        stock >= 1 ?
        <>
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
        isDisabled={!stock}
        >
        Agregar al carrito
      </Button>
        </>
      :
      <>
      <Text fontSize='sm' color={'#e53e3e'}>No tenemos stock disponible</Text>
      <Button mt={'1rem'}><ChrakraLink as={Link} to={'/'} textAlign={'center'} >Ir al carrito</ChrakraLink></Button>
      </>
      }
    </Box>
  )
}



export default ItemCount
