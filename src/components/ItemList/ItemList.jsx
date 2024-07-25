import { Box, Button, Flex } from '@chakra-ui/react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ products }) =>{
  return (
    <Flex wrap={'wrap'} justify={'center'} align={'center'} className='ListGroup'>
        {
          products.map((prod)=>(
            <Box key={prod.id}>
              <Item {...prod} />
            </Box>
          ))
        }
    </Flex>
  )
}

export default ItemList
