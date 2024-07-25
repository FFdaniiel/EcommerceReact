import React from 'react'
import {  Card, CardBody, Heading, Stack, Image,Text, Button  } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import './Item.css'
const Item = ({ id, nombre, img, precio,stock})=> {
  
  return (
    <Card className="itemContainer" maxW="sm" minW={'300px'}>
      <CardBody>
        {stock === 0 ? (
          <>
            <Text textAlign={'center'}
             p={'0'} w={'100%'} 
             left={'0'} top={'0'} 
             zIndex={'1'} 
             position={'absolute'} 
             color={'gray.50'} 
             padding={'.4rem'}
             bg={'#e53e3e'}
             >Sin Stock disponible</Text>
            <Image
              w={'200px'}
              h={'200px'}
              src={img}
              alt={nombre}
              borderRadius="lg"
              margin={'0 auto'}
              filter={'grayscale(100%)'}
            />
          </>
        ) : (
          <Image
            w={'200px'}
            h={'200px'}
            src={img}
            alt={nombre}
            borderRadius="lg"
            margin={'0 auto'}
          />
        )}
        <Stack mt="6" spacing="3" align={'center'}>
          <Heading size="sm" textAlign={'center'}>{nombre}</Heading>
          <Text color="blue.600" fontSize="2xl">
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Link to={`/product/${id}`}>
        <Button w={'100%'}>Ver detalle</Button>
      </Link>
    </Card>
  )
}

export default Item
