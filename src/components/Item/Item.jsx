import React from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Image,Text } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({nombre,img,precio})=> {
  return (
    <Card maxW='sm'>
    <CardBody>
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
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ' , quantity)}/>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='ghost' colorScheme='blue'>
          Ver detalle
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}

export default Item
