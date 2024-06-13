import { Flex, Heading,Menu,MenuButton,MenuList,MenuItem, Button } from '@chakra-ui/react'
import React from 'react'
import { FaChevronDown } from "react-icons/fa";

function NavBarCategory() {
  return (
    <Flex  justify={'center'} align={'center'} height={'8vh'} w={'100%'}  >
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
    </Flex>
  )
}

export default NavBarCategory
