import { Box, Button, Text,  Link as ChrakraLink,} from '@chakra-ui/react'
import React from 'react'
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Box
      textAlign={'center'}
      color={'#fff'}
      m={'10% auto'}
      fontStyle={'italic'}
    >
      <Text lineHeight={'0'} fontSize={'2xl'} fontWeight={'bold'}>
        whoops!
      </Text>
      <Text fontWeight={'bold'} fontSize={'7rem'} lineHeight={'1.2'}>
        404
      </Text>
      <Text lineHeight={'0'} fontSize={'2xl'}>
        Page not Found
      </Text>
      <ChrakraLink as={Link} to={'/'} textAlign={'center'}>
        <Button
          mt={'2rem'}
          colorScheme="red"
          bgGradient="linear(to-r, gray.600, gray.700, gray.900)"
          color="white"
          variant="solid"
        >
          Ir a inicio
        </Button>
      </ChrakraLink>
    </Box>
  )
}

export default PageNotFound
