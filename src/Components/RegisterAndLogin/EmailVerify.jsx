import React from "react";
import RightView from "../RightView";
import emailVerify from "../../Assets/emailVerify.png";
import verifyEmailLogo from "../../Assets/verifyEmailLogo.png";
import { Image, Text, Box, Center, Flex } from "@chakra-ui/react";
const EmailVerify = () => {
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
      <Box mt={"100px"}>
        <Center>
          <Image h={"250px"} src={verifyEmailLogo} />
        </Center>
        <Center mt={"30px"}>
            <Text fontSize={"22px"} fontWeight={"600"} fontFamily={"poppins"} w={"500px"}>
                A verification link has been sent to john***@gmail.com
            </Text>
        </Center>
        <Center mt={"40px"} fontSize={"20px"} lineHeight={"30px"} fontWeight={"600"} fontFamily={"poppins"}>
                <Text>Didn't receive email?</Text>
                <Text color={"#0086FF"} cursor={"pointer"}>resend link</Text>
        </Center>
      </Box>
    </RightView>
  );
};

export default EmailVerify;
