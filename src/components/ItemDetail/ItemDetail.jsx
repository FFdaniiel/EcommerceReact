import React, { useContext, useState } from 'react'
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
  Link as ChrakraLink,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
} from '@chakra-ui/react'
import { ToastContainer, toast,Slide} from 'react-toastify';
import Context from '../../context/CartContext';
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";

const ItemDetail = ({id, nombre, precio, categoria, stock, descripcion, img }) => {
  
  const [quantity, setQuantity] = useState(0)
  const { addItem } = useContext(Context)

  const onAdd = (quantity) => {
    const item = {
      id,
      img,
      nombre,
      precio,
    }
    setQuantity(quantity)
    addItem(item, quantity)
    toast.success(`Agregaste ${quantity} ${nombre}`)
  }
  return (
    <Card maxW="md" m={'1rem'} p={'1rem'} maxH={'100%'}>
      <Breadcrumb spacing='8px' separator={<MdChevronRight  color='gray.500' /> }>
        <BreadcrumbItem>
              <Link to={'/'}>Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
              <ChrakraLink textTransform={'capitalize'} as={Link} to={`/category/${categoria}`}>{categoria}</ChrakraLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
              <ChrakraLink as={Link} to={`/product/${id}`}>{nombre}</ChrakraLink>
        </BreadcrumbItem>
      </Breadcrumb>
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
            {
              quantity === 0 ?
              <ItemCount
              initial={1}
              stock={stock}
              onAdd={onAdd}
              />
              :
              <Flex justify={'space-around'}>
              <Button><ChrakraLink as={Link} to={'/'} textAlign={'center'}>Seguir comprando</ChrakraLink></Button>
              <Button><ChrakraLink as={Link} to={'/cart'} textAlign={'center'}>Ir al carrito</ChrakraLink></Button>
              </Flex>
            }
        </Stack>
      </CardBody>
      <ToastContainer 
      transition={Slide}
      />
    </Card>
  )
}

export default ItemDetail
