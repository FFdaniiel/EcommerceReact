import { Flex,Menu,MenuButton,MenuList,MenuItem, Button, Text, Link as ChrakraLink} from '@chakra-ui/react'
import React from 'react'
import { FaChevronDown} from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./NavBarCategory.css"
function NavBarCategory() {
  return (
    <Flex>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />} className='menuMobile' m={'0 auto'}  mt={'1rem'} >
          Productos
        </MenuButton>
        <MenuList zIndex={10}>
          <Link to={'/'}> <MenuItem >Todos</MenuItem></Link>
          <Link to={'/category/celulares'} > <MenuItem >Celulares</MenuItem></Link>
          <Link to={'/category/notebooks'} > <MenuItem >Notebooks</MenuItem></Link>
          <Link to={'/category/gabinetes'} ><MenuItem >Gabinetes</MenuItem></Link>
          <Link to={'/category/procesadores'} ><MenuItem >Procesadores</MenuItem></Link>
        </MenuList>
      </Menu>
    </Flex>
      
  )
}

export default NavBarCategory
