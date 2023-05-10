import React, { useState } from "react";
import RightView from "../RightView";
import links from "../../Assets/links.png";
import {
  Button,
  Flex,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  useToast,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { useRef } from "react";
import axios from 'axios';
const Links = ({ setStep,token }) => {
  const toast=useToast();
  const back = "< Back";
  const [ulinks, setLinks] = useState({});
  const [social, setSocial] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const inputLink=useRef();
  const handleSingleLink=()=>{
    const temp={...ulinks};
    temp[social]=inputLink.current.value
    setLinks(temp);
    toast({
      title: 'Link saved',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    onClose();
  }
  const handleLinks = () => {
    try {
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/set-user-plug`,ulinks, {
        headers: {
          Authorization: `Bearer ${token}`,
        }})
          .then((res)=>{
            setStep(3);
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

  };
  return (
    <RightView image={links}>
      <Modal isOpen={isOpen} onClose={()=>{
        inputLink.current.value="";
        onClose();
      }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{social} Link</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input ref={inputLink} placeholder="Paste your link here" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={()=>{
              inputLink.current.value="";
              onClose();
            }}>
              Close
            </Button>
            <Button onClick={handleSingleLink} colorScheme="green">Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex justifyContent={"space-between"} pl={"150px"} pr={"10px"}>
        <Text>{back}</Text>
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
        pl={"100px"}
        pr={"150px"}
        mt={"70px"}
        pb={"0px"}
        gap={"40px"}
        textAlign={"center"}
      >
        <Text
          mb={"20px"}
          fontSize={"30px"}
          fontWeight={"600"}
          lineHeight={"45px"}
        >
          How about a plug?
        </Text>
        <Box
          borderRadius={"10px"}
          bgColor={"#63D471"}
          w={"530px"}
          cursor={"pointer"}
          onClick={()=>{
            setSocial("spotify");
            onOpen();
          }}
        >
          <Center>
            <Flex
              gap={"27px"}
              h={"80px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Center>
                <Image
                  h={"40px"}
                  src="https://i.ibb.co/58vvXJT/spotify-48.png"
                />
              </Center>
              <Text cursor={"pointer"} fontWeight={"600"} fontSize={"16px"} color={"white"}>
                Spotify Link
              </Text>
            </Flex>
          </Center>
        </Box>
        <Box borderRadius={"10px"} bgColor={"#F6871F"} w={"530px"} cursor={"pointer"}
          onClick={()=>{
            setSocial("soundCloud");
            onOpen();
          }}>
          <Center>
            <Flex
              gap={"27px"}
              h={"80px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Center>
                <Image
                  h={"40px"}
                  src="https://i.ibb.co/3RvkHLc/soundcloud-48.png"
                />
              </Center>
              <Text cursor={"pointer"} fontWeight={"600"} fontSize={"16px"} color={"white"}>
                Soundcloud Link
              </Text>
            </Flex>
          </Center>
        </Box>
        <Box borderRadius={"10px"} bgColor={"#FF0000"} w={"530px"} cursor={"pointer"}
          onClick={()=>{
            setSocial("youtube");
            onOpen();
          }}>
          <Center>
            <Flex
              gap={"27px"}
              h={"80px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Center>
                <Image
                  h={"40px"}
                  src="https://i.ibb.co/k3jQ105/icons8-youtube-50.png"
                />
              </Center>
              <Text cursor={"pointer"} fontWeight={"600"} fontSize={"16px"} color={"white"}>
                YouTube Link
              </Text>
            </Flex>
          </Center>
        </Box>
        <Flex justifyContent={"space-between"}>
          <Button
            onClick={() => setStep(3)}
            variant={"unstyled"}
            color={"#787878"}
            w={"50%"}
          >
            Skip
          </Button>
          <Button
            onClick={handleLinks}
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

export default Links;
