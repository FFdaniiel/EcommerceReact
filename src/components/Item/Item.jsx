import React from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Image,Text  } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { color } from 'framer-motion';
import './Item.css'
const Item = ({ id, nombre, img, precio})=> {
  return (
    <Link to={`/product/${id}`} color={'red'} >
  <Card className='itemContainer' maxW='sm' minW={'300px'}>
    <CardBody >
      <Image
        w={'350px'}
        h={'350px'}
        src={img}
        alt={nombre}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3' align={'center'}>
        <Heading size='md'>{nombre}</Heading>
        <Text color='blue.600' fontSize='2xl'>
          ${precio}
        </Text>
      </Stack>
    </CardBody>
  </Card>
    </Link>
  )
}

export default Item
