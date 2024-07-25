import React, { useContext} from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    Image,
    Flex,
    Text,
    Heading,
    Link as ChakraLink
  } from '@chakra-ui/react'
import Context from '../../context/CartContext'
import { Link } from "react-router-dom";
import { MdOutlineDelete, MdDelete,MdShoppingCartCheckout} from "react-icons/md";
import { SlHandbag } from "react-icons/sl";
const Cart = () => {
    const {cart, removeItem, clearCart, getTotalPrice } = useContext(Context)

    if (cart.length === 0) {
      return(
      <Flex flexDirection={'column'} justify={'center'} align={'center'} mt={10} gap={'1rem'}>
        <SlHandbag color='#fff' fontSize={'3rem'}/>
        <Text color={'#fff'}>Aun no agregaste productos al carrito!</Text>
        <ChakraLink as={Link} color={'#212121'} to={'/'} padding={'.5rem 2rem'} bg={'#fff'} borderRadius={'1rem'} textAlign={'center'}>Ver producto</ChakraLink>
      </Flex>
      )
    }else{

    return (
      
      <TableContainer >
        <Table variant="simple" colorScheme="black" bg={'#fff'} mt={'1rem'} >
          <Thead >
            <Tr>
              <Th>Imagen</Th>
              <Th>Producto</Th>
              <Th>Cantidad</Th>
              <Th>Precio</Th>
              <Th>SubTotal</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
              {
                
                  cart.map(({nombre, quantity, precio, id,img}) =>(
                      <Tr key={id} >
                          <Td><Image src={img} alt={nombre} w={'100px'}/></Td>
                          <Td>{nombre}</Td>
                          <Td>{quantity}</Td>
                          <Td>${precio}</Td>
                          <Td>${precio * quantity}</Td>
                          <Td>{
                              <Button onClick={()=>removeItem(id)} bg={'#F56565'}><MdOutlineDelete /></Button>
                              }
                          </Td>
                      </Tr>
                  ))
              }
            </Tbody>
        </Table>
        <Flex justify={'center'} flexDirection={'column'} gap={'1'}>
          <Heading color={'#fff'} textAlign={'center'}>Total: {getTotalPrice()}</Heading>
          <Flex justify={'center'} gap={'1rem'}>
            <Button onClick={()=>clearCart()} ><MdDelete />Vaciar Carrito</Button>
            <Button><ChakraLink as={Link} to={'/checkout'} display={'flex'} alignItems={'center'}><MdShoppingCartCheckout />Finalizar Compra</ChakraLink></Button>
          </Flex>
          
        </Flex>
      </TableContainer>
    )
  }
}

export default Cart