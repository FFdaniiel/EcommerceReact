import { Flex,Menu,MenuButton,MenuList,MenuItem, Button } from '@chakra-ui/react'
import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

function NavBarCategory() {
  return (
    <Flex  justify={'center'} align={'center'} pt={'1rem'}>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          Productos
        </MenuButton>
        <MenuList>
          <MenuItem ><Link to={'/'}>Todos</Link></MenuItem>
          <MenuItem ><Link to={'/category/celulares'} >Celulares</Link></MenuItem>
          <MenuItem ><Link to={'/category/notebooks'} >Notebooks</Link></MenuItem>
          <MenuItem ><Link to={'/category/gabinetes'} >Gabinetes</Link></MenuItem>
          <MenuItem ><Link to={'/category/procesadores'} >Procesadores</Link></MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default NavBarCategory
