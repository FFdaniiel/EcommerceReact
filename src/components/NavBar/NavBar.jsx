import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
    Button,
    Flex,
    Heading
  } from '@chakra-ui/react'
  import { FaChevronDown } from "react-icons/fa";
  
function NavBar() {
  return (
    <Flex  justify={'space-between'} align={'center'} height={'10vh'} w={'100%'} bg={'#1B262C'}>
      <Heading m={4} color={'#BBE1FA'}>LOGO</Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </Flex>
  )
}

export default NavBar