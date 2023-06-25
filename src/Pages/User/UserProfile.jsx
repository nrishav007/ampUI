import React, { useState } from "react";
import UserNav from "../../Components/UserNav";
import { Box, Button, Flex, Input, Text, useToast,Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
 } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logout, profileUpdate } from "../../Redux/AuthReducer/Action";
import { useNavigate } from "react-router-dom";
const UserProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const token = useSelector((store) => store.auth.token);
  const user = useSelector((store) => store.auth.user);
  const [pass,setPass]=useState({
    userId:user._id,
    currentPassword:"",
    newPassword:"",
    confirmNewPassword:""
  })
  const handlePass=(e)=>{
    const {name,value}=e.target;
    const temp={...pass};
    temp[name]=value;
    setPass(temp);
  }
  const toast = useToast();
  const [payload,setPayload]=useState({
    djName:user.djName||"",
    email:user.email||"",
    zipCode:user.zipCode||""
  })
  const handleProfile=(e)=>{
    const {name,value}=e.target;
    const temp={...payload};
    temp[name]=value;
    setPayload(temp);
  }
  const handleProfileSubmit=()=>{
    axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/api/user/update-profile`,payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(()=>{
      dispatch(profileUpdate(token,toast))
    })
  }
  const handlePassSubmit=()=>{
    if(pass.confirmNewPassword!=="" && pass.currentPassword!=="" && pass.newPassword!==""){
      if(pass.confirmNewPassword===pass.newPassword){
        axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/api/user/update-password`,pass, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(()=>{
      toast({
        title: `password updated`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();
      dispatch(logout(toast))
      navigate("/login")
    })
      }
      else{
        toast({
          title: `new password and confirm password is not same`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
    else{
      toast({
        title: `Fill all fields`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }
  return (
    <UserNav>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Text mt={"10px"}>Old Password</Text>
           <Input onChange={(e)=>handlePass(e)} name="currentPassword" type={"password"} mt={"10px"} />
           <Text mt={"10px"}>New Password</Text>
           <Input onChange={(e)=>handlePass(e)} name="newPassword" type={"password"} mt={"10px"} />
           <Text mt={"10px"}>Confirm New Password</Text>
           <Input onChange={(e)=>handlePass(e)} name="confirmNewPassword" type={"password"} mt={"10px"} />
          </ModalBody>

          <ModalFooter>
            <Button onClick={handlePassSubmit} colorScheme='blue' mr={3} >
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box textAlign={"left"} p={"0px 20px"}>
        <Text fontSize={"30px"} fontWeight={"600"}>
          Update your profile
        </Text>
        <Text mt={"10px"} fontSize={"22px"} fontWeight={"600"}>
          Name
        </Text>
        <Input
          mt={"10px"}
          onChange={(e)=>handleProfile(e)}
          name={"djName"}
          placeholder="Enter your name"
          borderRadius={"20px"}
          defaultValue={payload.djName}
        />
        <Text mt={"10px"} fontSize={"22px"} fontWeight={"600"}>
          Email
        </Text>
        <Input
        onChange={(e)=>handleProfile(e)}
        name={"email"}
          mt={"10px"}
          placeholder="Enter your email"
          borderRadius={"20px"}
          defaultValue={payload.email}
        />
        <Text mt={"10px"} fontSize={"22px"} fontWeight={"600"}>
          Zip Code
        </Text>
        <Input
        onChange={(e)=>handleProfile(e)}
        name={"zipCode"}
          mt={"10px"}
          placeholder="Enter your zip code"
          borderRadius={"20px"}
          defaultValue={payload.zipCode}
        />
        <Flex gap={"10px"}>
          <Button
            mb={"20px"}
            mt={"20px"}
            variant={"unstyled"}
            bgColor={"#0086FF"}
            color={"white"}
            w={"100%"}
            p={"0px 20px"}
            _hover={{}}
            onClick={handleProfileSubmit}
            borderRadius={"15px"}
          >
            Update details
          </Button>
          <Button
            mb={"20px"}
            mt={"20px"}
            w={"100%"}
            onClick={onOpen}
            variant={"unstyled"}
            bgColor={"#0086FF"}
            color={"white"}
            p={"0px 20px"}
            _hover={{}}
            borderRadius={"15px"}
          >
            Update password
          </Button>
        </Flex>
      </Box>
    </UserNav>
  );
};

export default UserProfile;
