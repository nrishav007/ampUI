import {
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
  import { Link } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
  const LoginView = () => {
    const [er,setEr]=useState(false);
    const email=useRef();
    const password=useRef();
    const toast=useToast();
    useEffect(()=>{
      if (localStorage.hasOwnProperty('amp')) {
        let payload=JSON.parse(localStorage.getItem("amp"));
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/login-user`,payload)
          .then((res)=>{
            toast({
              title: res.data.message,
              status: 'success',
              duration: 4000,
              isClosable: true,
            })
          })
          .catch((err)=>{
            console.log(err);
            setEr(true);
            toast({
              title: err.response.data.error,
              status: 'error',
              duration: 4000,
              isClosable: true,
            })
          })
      }
    },[])
    const handleRemember=()=>{
      if(email.current.value!=="" && password.current.value!==""){
        const emailValidation = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
        if (emailValidation.test(email.current.value) === false) {
          toast({
            title: 'Invalid E-mail',
            status: 'error',
            duration: 4000,
            isClosable: true,
          })
        }
        else{
          const payload={};
          payload.email=email.current.value;
          payload.password=password.current.value;
          localStorage.setItem("amp",JSON.stringify(payload));
          handleLogin();
        }
      }
      else{
        toast({
          title: 'Fill all fields',
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
        setEr(true);
      }
    }
    const handleLogin=()=>{
      if(email.current.value!=="" && password.current.value!==""){
        const emailValidation = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
        if (emailValidation.test(email.current.value) === false) {
          toast({
            title: 'Invalid E-mail',
            status: 'error',
            duration: 4000,
            isClosable: true,
          })
        }
        else{
          const payload={};
          payload.email=email.current.value;
          payload.password=password.current.value;
          axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/login-user`,payload)
          .then((res)=>{
            toast({
              title: res.data.message,
              status: 'success',
              duration: 4000,
              isClosable: true,
            })
          })
          .catch((err)=>{
            console.log(err);
            setEr(true);
            toast({
              title: err.response.data.error,
              status: 'error',
              duration: 4000,
              isClosable: true,
            })
          })
        }
      }
      else{
        toast({
          title: 'Fill all fields',
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
        setEr(true);
      }
    }
    return (
      <RightView image={regview}>
        <Flex justifyContent={"space-between"} pl={"150px"} pr={"10px"}>
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
            Login to your profile
          </Text>
          <Text fontSize={"16px"} color={er?"red":"white"} opacity={er?"1":"0"}>* This email address/password is invalid</Text>
          <FormLabel>Email</FormLabel>
          <Input type={"email"} ref={email} placeholder="Enter your email" />
          <FormLabel>Password</FormLabel>
          <Input type={"password"} ref={password} placeholder="Type a strong password" />
          <Flex justifyContent={"space-between"}>
            <Flex gap={"10px"}>
            <Checkbox onChange={handleRemember} />
            <Text>RememberMe</Text>
            </Flex>
            <Text fs={"14px"} textDecoration={"underline"}>Forgot password?</Text>
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
          <Flex mt={"4px"} cursor={"pointer"} justifyContent={"center"}gap={"15px"}boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.1)"}>
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
            <Text fontFamily={"poppins"} fontWeight={"500"} fontSize={"15px"} cursor={"pointer"}>New here? </Text>
            <Link to={"/register"}><Text color={"blue"} cursor={"pointer"}>Register now</Text></Link>
          </Center>
        </Flex>
      </RightView>
    );
  };
  
  export default LoginView;
  