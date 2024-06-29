import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {
  Card,
  CardBody,
  Heading,
  Text,
  Image,
  Stack,
  Box,
  Divider,
  Flex,
} from '@chakra-ui/react'
import { ToastContainer, toast,Slide} from 'react-toastify';

const ItemDetail = ({ nombre, precio, categoria, stock, descripcion, img }) => {
    const onAdd = (quantity) => {
        toast.success(`Agregaste ${quantity} ${nombre}`)
    }
  return (
    <Card maxW="md" m={'1rem'}>
      <Heading size="md" textAlign={'center'} p={'1rem'}>
        {nombre}
      </Heading>
      <CardBody >
        <Box align={'center'}>
            <Image
                w={'350px'}
                h={'350px'}
                src={img}
                alt={nombre}
                borderRadius="lg"
                />
        </Box>
        <Stack borderLeft={'6px solid #457B9D'} mt={'1rem'} border={'2px solid #A8DADC'} borderRadius={'1rem'} p={'1rem'} >
            <Text className="info" fontSize='1xl' textTransform={'uppercase'} color='blue.600' >{categoria}</Text>
            <Text className="info">
                Descripción: <br/> {descripcion}
            </Text>
            <Text className="info" fontSize='1xl' textTransform={'uppercase'}>
                Cantidad: {stock}
            </Text>
            
            <Text className="info" align={'center'} fontSize={'25px'} textTransform={'uppercase'} color='blue.600'>
            precio: ${precio}
            </Text>
            <ItemCount
            initial={1}
            stock={stock}
            onAdd={onAdd}
            />
        </Stack>
      </CardBody>
      <ToastContainer 
      transition={Slide}
      />
    </Card>
  )
}

export default ItemDetail
