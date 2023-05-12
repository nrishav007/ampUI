import React from "react";
import RightView from "../RightView";
import setup_profile from "../../Assets/setup_profile.png";
import back from "../../Assets/back.png";
import { Button, Flex, Input, Text, Textarea, useToast,Center,Image } from "@chakra-ui/react";
import { useRef } from "react";
import axios from "axios";
const SetupProfile = ({setStep,token}) => {
  const djName=useRef();
  const djBio=useRef();
  const toast=useToast();
  const handleProfile=()=>{
    try {
      const payload={
        djName:djName.current.value,
        djBio:djBio.current.value
      }
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/set-user-profile`,payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        }})
          .then((res)=>{
            setStep(5);
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
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <RightView image={setup_profile} pr={"70px"}>
      <Flex justifyContent={"space-between"}>
      <Flex gap={"8px"} color={"#0086FF"} onClick={()=>setStep(3)}>
          <Center>
          <Image h={"15px"} src={back} /></Center>
          <Center>
          <Text>Back</Text></Center>
        </Flex>
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
        direction={"column"}
        pr={["30px","30px","60px","90px"]}
        mt={"148px"}
        pb={"0px"}
        gap={"20px"}
        textAlign={"left"}
      >
        <Text
          mb={"60px"}
          fontSize={["15px","20px","22px","30px"]}
          fontWeight={"600"}
          lineHeight={"45px"}
        >
          Set up your profile
        </Text>
        <Text>Dj Name</Text>
        <Input ref={djName} placeholder="Name" />
        <Text>Personal bio</Text>
        <Textarea ref={djBio} h={"150px"} placeholder={"Type here ..."} />
        <Flex justifyContent={"space-between"}>
          <Button onClick={()=>setStep(5)} variant={"unstyled"} color={"#787878"} w={"50%"}>
            Skip
          </Button>
          <Button
          onClick={handleProfile}
            variant={"unstyled"}
            color={"white"}
            w={"50%"}
            bgColor={"#0086FF"}
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </RightView>
  );
};

export default SetupProfile;
