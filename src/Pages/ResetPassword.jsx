import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import RightView from '../Components/RightView'
import reset_logo from "../Assets/reset_logo.png"
import reset_password from "../Assets/reset_password.png"
const ResetPassword = () => {
    const back="< Go Back"
  return (
    <RightView image={reset_password}>
        <Flex>
        <Flex gap={"2px"} fontSize={"30px"} fontWeight={"bold"}>
        <Text>A</Text>
        <Text>M</Text>
        <Text>P</Text>
        </Flex>
        <Flex ml={"2px"} direction={"column"} h={"30px"} w={"30px"} bgColor={"#0085FF"} color={"white"} mt={"7px"} pl={"5px"} fontSize={"14px"}>
          <Text>S P</Text>
          <Text mt={"-9px"}>OT</Text>
        </Flex>
        </Flex>
      <Center mt={"100px"}>
        <Box h={"250px"} overflow={"hidden"}>
        <Image h={"400px"} src={reset_logo} /></Box>
        
      </Center>
      <Center>
        <Text fontWeight={"600"} color={"#3A3A3A"} fontSize={"20px"}>john***@gmail.com</Text>
      </Center>
      <Center mt={"30px"}>
        <Flex>
            <Text>Didn't receive an email?</Text>
            <Text color={"#0086FF"} textDecoration={"underline"}>Resend link</Text>
        </Flex>
      </Center>
      <Center mt={"30px"}>
      <Button fontWeight={"600"} fontFamily={"poppins"} w={"250px"} variant={"unstyled"} color={"white"} bgColor={"#0086FF"} borderRadius={"15px"}>{back}</Button>
      </Center>
    </RightView>
  )
}

export default ResetPassword