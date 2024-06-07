import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

function ItemListContainer({title}) {
  return (
    <center >
         <Heading color={'#BBE1FA'}>{title}</Heading>
    </center>
  )
}

export default ItemListContainer