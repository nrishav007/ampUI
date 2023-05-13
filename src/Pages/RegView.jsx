import {
  Box,
  Button,
  Center,
  Flex,
  FormLabel,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import regview from "../Assets/regview.png";
import uncheck from "../Assets/uncheck.png";
import check from "../Assets/check.png"
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import RightView from "../Components/RightView";
import { useState } from "react";
import Links from './../Components/RegisterAndLogin/Links';
import SetSound from './../Components/RegisterAndLogin/SetSound';
import SetupProfile from './../Components/RegisterAndLogin/SetupProfile';
import EmailVerify from './../Components/RegisterAndLogin/EmailVerify';
import { useRef } from "react";
import { Link } from "react-router-dom";
const Register=({setStep,setToken,setEmail})=>{
  const [terms,setTerms]=useState(false);
  const name=useRef();
  const email=useRef();
  const password=useRef();
  const toast = useToast();
  const handleRegister=(type)=>{
    if(terms){
      if(name.current.value!=="" && email.current.value!=="" && password.current.value!==""){
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
          if(type==="DJ"){
            payload.userType="DJ";
          }
          else{
            payload.userType="User";
          }
          setEmail(email.current.value);
          payload.firstName=name.current.value;
          payload.email=email.current.value;
          payload.password=password.current.value;
          axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/register-user`,payload)
          .then((res)=>{
            setToken(res.data.data.token);
            if(payload.userType==="User"){
              setStep(5);
            }
            else{
              setStep(2);
            }
            
            toast({
              title: res.data.message,
              status: 'success',
              duration: 4000,
              isClosable: true,
            })
          })
          .catch((err)=>{
            console.log(err);
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
        console.log("fail")
      }
    }
    else{
      toast({
        title: 'Accept Terms and Conditions',
        status: 'info',
        duration: 4000,
        isClosable: true,
      })
    }
    // setStep(2)
  }
  return (
    <RightView image={regview}>
      <Box textAlign={"left"}>
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
      </Box>
      <Flex
        gap={"10px"}
        direction={"column"}

        pb={"0px"}
        textAlign={"left"}
      >
        <Text
        mt={"95px"}
          mb={"60px"}
          fontWeight={"600"}
          fontSize={["15px","20px","25px","30px"]}
          lineHeight={"45px"}
        >
          Let's get started
        </Text>
        <FormLabel>Name</FormLabel>
        <Input ref={name} type={"text"} required placeholder="Enter your name" />
        <FormLabel>Email</FormLabel>
        <Input ref={email} type={"email"} required placeholder="Enter your email" />
        <FormLabel>Password</FormLabel>
        <Input ref={password} type={"password"} required placeholder="Type a strong password" />
        <Text fontSize={"14px"} color={"#787878"}>
          Password must be atleast 6 characters
        </Text>
        <Flex gap={"10px"}>
          <Center>
            <Image cursor={"pointer"} h={"20px"} src={terms?check:uncheck} onClick={()=>setTerms(!terms)} />
          </Center>
          <Text>I agree to all of terms & conditions</Text>
        </Flex>
        <Flex justifyContent={"space-between"} gap={"10px"} direction={["column","column","column","row"]}>
        <Button
        p={"0px 7px"}
        w={["100%","100%","100%","60%"]}
        onClick={()=>handleRegister("DJ")}
          fontSize={"18px"}
          _hover={{
            bgColor: "#0086FF",
          }}
          borderRadius={"10px"}
          bgColor={"#0086FF"}
          color={"white"}
        >
          Register as DJ
        </Button>
        <Button
        w={["100%","100%","100%","60%"]}
        onClick={()=>handleRegister("User")}
          fontSize={"18px"}
          _hover={{
            bgColor: "#0086FF",
          }}
          borderRadius={"10px"}
          bgColor={"#0086FF"}
          color={"white"}
        >
          Register as User
        </Button> 
        </Flex>
        
        
        <Flex cursor={"pointer"} justifyContent={"center"}>
          <Center>
            <FcGoogle />
            <Text cursor={"pointer"} fontSize={"18px"}>
              Sign up with Google
            </Text>
          </Center>
        </Flex>
        <Center>
          <Text >Already have an account?</Text>
          <Link to={"/login"}><Text color={"blue"}cursor={"pointer"}> Log in</Text></Link>
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
}
const RegView = () => {
  const [step,setStep]=useState(1);
  const [token,setToken]=useState("");
  const [email,setEmail]=useState("");
  return(
    <Box>
      {
        step===1?<Register setStep={setStep} setEmail={setEmail} setToken={setToken} />:step===2?<Links setStep={setStep} token={token} />:step===3?<SetSound setStep={setStep} token={token} />:step===4?<SetupProfile setStep={setStep} token={token} />:step===5?<EmailVerify setStep={setStep} email={email} />:null
      }
    </Box>
  )
};

export default RegView;
