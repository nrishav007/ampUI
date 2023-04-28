import React from "react";
import RightView from "../Components/RightView";
import links from "../Assets/links.png";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";
const Links = () => {
  const back = "< Back";
  return (
    <RightView image={links}>
      <Flex justifyContent={"space-between"} pl={"150px"} pr={"10px"}>
        <Text>{back}</Text>
        <Text>LOGO</Text>
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
        <Text mb={"20px"} fontSize={"30px"} fontWeight={"600"} lineHeight={"45px"}>
          How about a plug?
        </Text>
        <Box borderRadius={"10px"} bgColor={"#63D471"} w={"530px"}>
          <Center>
            <Flex gap={"27px"} h={"80px"}justifyContent={"center"} alignItems={"center"}>
                <Center>
              <Image h={"40px"} src="https://i.ibb.co/58vvXJT/spotify-48.png" /></Center>
              <Text fontWeight={"600"} fontSize={"16px"} color={"white"}>Spotify Link</Text>
            </Flex>
          </Center>
        </Box>
        <Box borderRadius={"10px"} bgColor={"#F6871F"} w={"530px"}>
          <Center>
            <Flex gap={"27px"} h={"80px"}justifyContent={"center"} alignItems={"center"}>
                <Center>
              <Image h={"40px"} src="https://i.ibb.co/3RvkHLc/soundcloud-48.png" /></Center>
              <Text fontWeight={"600"} fontSize={"16px"} color={"white"}>Soundcloud Link</Text>
            </Flex>
          </Center>
        </Box>
        <Box borderRadius={"10px"} bgColor={"#FF0000"} w={"530px"}>
          <Center>
            <Flex gap={"27px"} h={"80px"}justifyContent={"center"} alignItems={"center"}>
                <Center>
              <Image h={"40px"} src="https://i.ibb.co/k3jQ105/icons8-youtube-50.png" /></Center>
              <Text fontWeight={"600"} fontSize={"16px"} color={"white"}>YouTube Link</Text>
            </Flex>
          </Center>
        </Box>
        <Flex justifyContent={"space-between"}>
            <Button variant={"unstyled"} color={"#787878"} w={"50%"}>Skip</Button>
            <Button variant={"unstyled"} color={"white"} w={"50%"} bgColor={"#0086FF"}>Next</Button>
        </Flex>
      </Flex>
    </RightView>
  );
};

export default Links;
