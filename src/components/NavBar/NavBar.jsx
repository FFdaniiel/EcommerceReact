import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import {
    Flex,
    Heading
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
  
function NavBar() {
  return (
    <Flex  justify={'space-between'} align={'center'} height={'10vh'} w={'100%'} bg={'#323232'}>
      <Link to={'/'}>
        <Heading m={4} color={'#ffff'} className='logo' >Digitale</Heading>
      </Link>
      <CartWidget />
    </Flex>
  )
}

export default NavBar