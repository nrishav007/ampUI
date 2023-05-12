import React, { useState } from "react";
import RightView from "../RightView";
import set_sound from "../../Assets/set_sound.png";
import back from "../../Assets/back.png";
import {
  Button,
  Flex,
  Text,
  Center,
  Image,
  Box,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
const SetSound = ({ setStep, token }) => {
  const toast = useToast();
  const [payload, setPayload] = useState({});
  const [sound, setSound] = useState([
    {
      name: "Afrobeats",
      key: "sp1",
      active: false,
    },
    {
      name: "Rocks",
      key: "sp2",
      active: false,
    },
    {
      name: "Electronics",
      key: "sp3",
      active: false,
    },
    {
      name: "Hiphop",
      key: "sp4",
      active: false,
    },
    {
      name: "Reggea",
      key: "sp5",
      active: false,
    },
    {
      name: "Folk music",
      key: "sp6",
      active: false,
    },
    {
      name: "House music",
      key: "sp7",
      active: false,
    },
    {
      name: "Dance music",
      key: "sp8",
      active: false,
    },
    {
      name: "Tecno",
      key: "sp9",
      active: false,
    },
    {
      name: "Disco",
      key: "sp10",
      active: false,
    },
    {
      name: "Jazz",
      key: "sp11",
      active: false,
    },
    {
      name: "Pop",
      key: "sp12",
      active: false,
    },
  ]);
  const handleSound = () => {
    try {
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/api/user/set-user-sound-preference`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setStep(4);
          toast({
            title: res.data.message,
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: err.response.data.error,
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handlePref = (i) => {
    const tempS = [...sound];
    const tempP = { ...payload };
    if (tempS[i].active) {
      tempS[i].active = false;
      delete tempP[tempS[i].key];
    } else {
      tempS[i].active = true;
      tempP[tempS[i].key] = tempS[i].name;
    }
    setSound(tempS);
    setPayload(tempP);
  };
  return (
    <RightView image={set_sound} pr={"80px"}>
      <Flex justifyContent={"space-between"}>
        <Flex gap={"8px"} color={"#0086FF"} onClick={() => setStep(2)}>
          <Center>
            <Image h={"15px"} src={back} />
          </Center>
          <Center>
            <Text>Back</Text>
          </Center>
        </Flex>
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
      </Flex>
        <Text
        mt={"227px"}
          mb={"60px"}
          fontSize={"30px"}
          fontWeight={"600"}
          lineHeight={"45px"}
        >
          Set your sound
        </Text>
        <SimpleGrid
          fontStyle={"normal"}
          columns={[1,2,2,3,3,4]}
          gap={"10px"}
          mb={"80px"}
          fontSize={"18px"}
          fontWeight={"400"}
          fontFamily={"Roboto"}
        >
          {sound.map(({ name, active }, i) => {
            return (
              <Box
                p={"10px 30px 10px 30px"}
                boxShadow={"0px 0px 15px rgba(58, 58, 58, 0.1)"}
                cursor={"pointer"}
                _hover={{ bgColor: "blue.400", color: "white" }}
                color={active ? "white" : "black"}
                bgColor={active ? "blue.400" : "white"}
                onClick={() => handlePref(i)}
                borderRadius={"5px"}
              >
                {name}
              </Box>
            );
          })}
        </SimpleGrid>
        <Flex justifyContent={"space-between"} mb={"40px"}>
          <Button
            onClick={() => setStep(4)}
            variant={"unstyled"}
            color={"#787878"}
            w={"50%"}
          >
            Skip
          </Button>
          <Button
            onClick={handleSound}
            variant={"unstyled"}
            color={"white"}
            w={"50%"}
            bgColor={"#0086FF"}
          >
            Next
          </Button>
        </Flex>
    </RightView>
  );
};

export default SetSound;
