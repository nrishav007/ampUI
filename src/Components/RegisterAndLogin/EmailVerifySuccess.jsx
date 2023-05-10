import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import emailVerify from "../Assets/emailVerify.png";
import emailVerifySuccess from "../Assets/emailVerifySuccess.png";
import RightView from '../RightView';
const EmailVerifySuccess = () => {
  return (
    <RightView image={emailVerify}>
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
        <Box h={"300px"} overflow={"hidden"}>
        <Image src={emailVerifySuccess} /></Box>
        
      </Center>
      <Center mt={"30px"}>
      <Button fontWeight={"600"} fontFamily={"poppins"} w={"250px"} variant={"unstyled"} color={"white"} bgColor={"#0086FF"} borderRadius={"15px"}>Continue</Button>
      </Center>
    </RightView>
  )
}

export default EmailVerifySuccess