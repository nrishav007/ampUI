import {
  Box,
  Button,
  Center,
  Flex,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import regview from "../Assets/regview.png";
import { BsCheckCircle } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import RightView from "../Components/RightView";
const Reg_view = () => {
  return (
    <RightView image={regview}>
      <Flex justifyContent={"space-between"} pl={"150px"} pr={"10px"}>
        <Text>LOGO</Text>
        <Text>Translate</Text>
      </Flex>
      <Flex
        gap={"10px"}
        direction={"column"}
        pl={"100px"}
        pr={"150px"}
        pb={"0px"}
        textAlign={"left"}
      >
        <Text
          mb={"50px"}
          fontWeight={"600"}
          fontSize={"30px"}
          lineHeight={"45px"}
        >
          Let's get started
        </Text>
        <FormLabel>Name</FormLabel>
        <Input />
        <FormLabel>Name</FormLabel>
        <Input />
        <FormLabel>Name</FormLabel>
        <Input />
        <Text fontSize={"14px"} color={"#787878"}>
          Password must be atleast 6 characters
        </Text>
        <Flex gap={"20px"}>
          <Center>
            <BsCheckCircle />
          </Center>
          <Text>I agree to all of terms & conditions</Text>
        </Flex>
        <Button
          fontSize={"18px"}
          _hover={{
            bgColor: "#0086FF",
          }}
          borderRadius={"10px"}
          bgColor={"#0086FF"}
          color={"white"}
        >
          Register Now
        </Button>
        <Flex cursor={"pointer"} justifyContent={"center"}>
          <Center>
            <FcGoogle />
            <Text cursor={"pointer"} fontSize={"18px"}>
              Sign up with Google
            </Text>
          </Center>
        </Flex>
        <Center>
          <Text cursor={"pointer"}>Already have an account? Log in</Text>
        </Center>
        <Flex justifyContent={"space-between"}>
          <Text textDecoration={"underline"}>Need Help?</Text>
          <Flex gap={"5px"}>
            <Center>
              <FaSpotify />
            </Center>
            <Center>
              <FaInstagram />
            </Center>
            <Center>
              <FaFacebook />
            </Center>
            <Center>
              <FaYoutube />
            </Center>
          </Flex>
        </Flex>
      </Flex>
    </RightView>
  );
};

export default Reg_view;
