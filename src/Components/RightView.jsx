import React from 'react'
import {
    Box,
    Flex,
    Image
  } from "@chakra-ui/react";
const RightView = ({children,image}) => {
  return (
    <Box fontFamily={"Poppins"} fontStyle={"normal"} >
      <Flex>
        <Box h={"99%"} w={"90%"}>
            {children}
        </Box>
        <Box h={"90%"} >
          <Image w={"900px"} h={"635px"} src={image} />

        </Box>
      </Flex>
    </Box>
  )
}

export default RightView