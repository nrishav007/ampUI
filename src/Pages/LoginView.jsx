import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import regview from "../Assets/regview.png";
import { FcGoogle } from "react-icons/fc";
import RightView from "../Components/RightView";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthReducer/Action";
import { DJMenuChanger, UserMenuChanger } from "../Redux/AppReducer/Action";
const LoginView = () => {
  const email = useRef();
  const password = useRef();
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((store) => store.auth.isError);
  useEffect(() => {
    if (
      localStorage.hasOwnProperty("amp") &&
      email.current.value === "" &&
      password.current.value === ""
    ) {
      let payload = JSON.parse(localStorage.getItem("amp"));
      dispatch(login(payload, toast, navigate));
    }
  }, [dispatch, toast, navigate]);
  const handleRemember = () => {
    if (email.current.value !== "" && password.current.value !== "") {
      const emailValidation = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
      if (emailValidation.test(email.current.value) === false) {
        toast({
          title: "Invalid E-mail",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      } else {
        const payload = {};
        payload.email = email.current.value;
        payload.password = password.current.value;
        localStorage.setItem("amp", JSON.stringify(payload));
      }
    } else {
      toast({
        title: "Fill all fields",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };
  const handleLogin = () => {
    if (email.current.value !== "" && password.current.value !== "") {
      const emailValidation = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
      if (emailValidation.test(email.current.value) === false) {
        toast({
          title: "Invalid E-mail",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      } else {
        const payload = {};
        payload.email = email.current.value;
        payload.password = password.current.value;
        dispatch(DJMenuChanger({ name: "Home" }));
        dispatch(UserMenuChanger({ name: "Home" }));
        dispatch(login(payload, toast, navigate));
        
      }
    } else {
      toast({
        title: "Fill all fields",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };
  return (
    <RightView image={regview}>
      <Box textAlign={"left"}>
        <Flex>
          <Flex gap={"2px"} fontSize={"30px"} fontWeight={"bold"}>
            <Text>A</Text>
            <Text>M</Text>
            <Text>P</Text>
          </Flex>
          <Flex
            ml={"2px"}
            direction={"column"}
            h={"30px"}
            w={"30px"}
            bgColor={"#0085FF"}
            color={"white"}
            mt={"7px"}
            pl={"5px"}
            fontSize={"14px"}
          >
            <Text>S P</Text>
            <Text mt={"-9px"}>OT</Text>
          </Flex>
        </Flex>
      </Box>
      <Flex gap={"10px"} direction={"column"} pb={"0px"} textAlign={"left"}>
        <Text
          mt={"150px"}
          mb={"50px"}
          fontWeight={"600"}
          fontSize={["15px", "20px", "22px", "30px"]}
          lineHeight={"45px"}
        >
          Login to your profile
        </Text>
        <Text
          fontSize={"16px"}
          color={error ? "red" : "white"}
          opacity={error ? "1" : "0"}
        >
          * This email address/password is invalid
        </Text>
        <FormLabel>Email</FormLabel>
        <Input type={"email"} ref={email} placeholder="Enter your email" />
        <FormLabel>Password</FormLabel>
        <Input
          type={"password"}
          ref={password}
          placeholder="Type a strong password"
        />
        <Flex justifyContent={"space-between"}>
          <Flex gap={"10px"}>
            <Checkbox onChange={handleRemember} />
            <Text>RememberMe</Text>
          </Flex>
          <Text fs={"14px"} textDecoration={"underline"}>
            Forgot password?
          </Text>
        </Flex>
        <Button
          mt={"20px"}
          fontSize={"18px"}
          _hover={{
            bgColor: "#0086FF",
          }}
          borderRadius={"10px"}
          bgColor={"#0086FF"}
          color={"white"}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Flex
          mt={"4px"}
          cursor={"pointer"}
          justifyContent={"center"}
          gap={"15px"}
          boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.1)"}
        >
          <Center>
            <FcGoogle />
          </Center>
          <Center>
            <Text cursor={"pointer"} fontSize={"18px"}>
              Login with Google
            </Text>
          </Center>
        </Flex>
        <Center>
          <Text
            fontFamily={"poppins"}
            fontWeight={"500"}
            fontSize={"15px"}
            cursor={"pointer"}
          >
            New here?{" "}
          </Text>
          <Link to={"/register"}>
            <Text color={"blue"} cursor={"pointer"}>
              Register now
            </Text>
          </Link>
        </Center>
      </Flex>
    </RightView>
  );
};

export default LoginView;
