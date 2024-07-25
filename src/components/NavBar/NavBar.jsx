import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import {
    Flex,
    Heading
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import NavBarCategory from '../NavBarCategory/NavBarCategory'
  
function NavBar() {
  return (
    <Flex  justify={'space-between'} align={'center'} height={'10vh'} w={'100%'} bg={'#323232'} borderBottom={'2px solid #fff'}>
      <Link to={'/'}>
        <Heading m={4} color={'#ffff'} className='logo' >Digitale</Heading>
      </Link>
      <NavBarCategory/>
      <CartWidget />
    </Flex>
  )
}

export default NavBar