import React from 'react'
import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'

function FooterContainer() {
    const year = () =>{
        let d = new Date();
        let currentYear = d.getFullYear()
        return currentYear
    }
  return (
    <Box
      bg={'#323232'}
      color={'white'}
      position={'fixed'}
      bottom={'0'}
      width={'100%'}>
      <Container textAlign={'center'}
        maxW={'6xl'}
        py={4}
        >
        <Text>&copy; {year()} Todos los Derechos reservados</Text>
      </Container>
    </Box>
  )
}
export default FooterContainer
