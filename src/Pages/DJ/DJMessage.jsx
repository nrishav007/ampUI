import React from 'react'
import Nav from "../../Components/Nav"; 
import { Box, Flex } from '@chakra-ui/react';
const DJMessage = () => {
  return (
    <Nav>
        <Flex>
          <Box w={"30%"} h={"full"}></Box>
          <Box></Box>
        </Flex>
    </Nav>
  )
}

export default DJMessage