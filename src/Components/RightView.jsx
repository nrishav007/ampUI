import React from 'react'
import {
    Box,
    Flex,
    Image
  } from "@chakra-ui/react";
const RightView = ({children,image}) => {
  return (
    <Box fontFamily={"Poppins"} fontStyle={"normal"}>
      <Flex>
        <Box w={"80%"}>
            {children}
        </Box>
        <Box>
          <Image src={image} />
        </Box>
      </Flex>
    </Box>
  )
}

export default RightView