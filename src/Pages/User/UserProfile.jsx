import React, { useState } from "react";
import UserNav from "../../Components/UserNav";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import pro from "../../Assets/pro.png";
import visa from "../../Assets/visa.png";
import master from "../../Assets/mastercard.png";
import elite from "../../Assets/elite.png";
import profile from "../../Assets/profile.png";
import { useSelector } from "react-redux";
const UserProfile = () => {
  const theme = useSelector((store) => store.app.theme);
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
  return (
    <UserNav>
      <Box pl={"30px"} pr={"10px"}>
        <Flex
        direction={["column","column","column","row","row"]}
          mb={"40px"}
          p={"20px"}
          bgColor={theme === "light" ? "#F6F6F6" : "#111823"}
          borderRadius={"15px"}
          justifyContent={"space-between"}
        >
          <Flex gap={"20px"} pt={"40px"}>
            <Flex direction={"column"} gap={"10px"}>
              <Center>
                <Image h={"150px"} w={"150px"} src={profile} />
              </Center>
              <Center>
                <Text fontSize={"12px"} color={"#B9B9B9"}>
                  Click photo for change
                </Text>
              </Center>
            </Flex>
            <Flex
              direction={"column"}
              gap={"1px"}
              pt={"15px"}
              textAlign={"left"}
            >
              <Center>
                <Text
                  fontFamily={"Poppins"}
                  fontSize={"34px"}
                  fontWeight={"600"}
                  color={theme === "light" ? "black" : "white"}
                >
                  Name
                </Text>
              </Center>
              <Center>
                <Text fontSize={"24px"} fontWeight={"400"} color={"#B9B9B9"}>
                  Address
                </Text>
              </Center>
            </Flex>
          </Flex>
          <Box
            p={"10px 50px"}
            bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
            borderRadius={"15px"}
            boxShadow={
              theme === "light"
                ? "0px 0px 30px rgba(0, 0, 0, 0.1)"
                : "0px 0px 30px rgba(0, 0, 0, 0.15)"
            }
          >
            <Box color={"#787878"} mb={"10px"}>
              QR CODE
            </Box>
            <Text color={"#787878"} mb={"10px"}>
              @USERNAME
            </Text>
            <Button
              p={"0px 40px"}
              mb={"10px"}
              bgColor={"#0086FF"}
              color={"white"}
            >
              Share Profile
            </Button>
          </Box>
        </Flex>
        <Flex
        direction={["column","column","column","row","row"]}
          justifyContent={"space-between"}
          textAlign={"left"}
          color={theme === "light" ? "black" : "white"}
          gap={"20px"}
        >
          <Flex
          direction={"column"}
            w={["100%","100%","100%","100%","35%"]}
            p={"20px"}
            borderRadius={"15px"}
            bgColor={theme === "light" ? "#F6F6F6" : "#111823"}
          >
            <Text fontSize={"24px"} fontWeight={"600"} mb={"7px"}>
              Besic Information
            </Text>
            <Text mb={"7px"}>User Name</Text>
            <Input
              w={"250px"}
              mb={"7px"}
              bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
              color={"#787878"}
            />
            <Text mb={"7px"}>Personal Bio</Text>
            <Textarea
              resize={"none"}
              w={"250px"}
              h={"150px"}
              mb={"7px"}
              bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
              color={"#787878"}
            />
            <Center>
            <Button
              variant={"unstyled"}
              p={"0px 20px"}
              borderRadius={"15px"}
              bgColor={"#0086FF"}
              color={"white"}
            >
              Confirm Update
            </Button>
            </Center>
          </Flex>
          <Flex
            direction={"column"}
            justifyContent={"space-between"}
            w={["100%","100%","100%","100%","55%"]}
            p={"20px"}
            borderRadius={"15px"}
            bgColor={theme === "light" ? "#F6F6F6" : "#111823"}
          >
            <Text fontSize={"24px"} fontWeight={"600"} mb={"7px"}>
              Set your sound
            </Text>
            <SimpleGrid
              fontStyle={"normal"}
              columns={[1, 2, 3, 4]}
              gap={"20px"}
              fontSize={"14px"}
              mb={"20px"}
              fontWeight={"400"}
              fontFamily={"Roboto"}
            >
              {sound.map(({ name, active }, i) => {
                return (
                  <Box
                    p={"10px 0px"}
                    boxShadow={"0px 0px 15px rgba(58, 58, 58, 0.1)"}
                    cursor={"pointer"}
                    _hover={{ bgColor: "blue.400", color: "white" }}
                    color={active ? "white" : "#B9B9B9"}
                    bgColor={
                      active
                        ? "#0086FF"
                        : theme === "light"
                        ? "#E0E0E0"
                        : "#181D29"
                    }
                    onClick={() => handlePref(i)}
                    borderRadius={"15px"}
                  >
                    <Center>{name}</Center>
                  </Box>
                );
              })}
            </SimpleGrid>
            <Center>
              <Button
                variant={"unstyled"}
                p={"0px 20px"}
                borderRadius={"15px"}
                bgColor={"#0086FF"}
                color={"white"}
              >
                Confirm Update
              </Button>
            </Center>
          </Flex>
        </Flex>
        <Flex
        direction={["column","column","column","row","row"]}
          justifyContent={"space-between"}
          mt={"30px"}
          color={theme === "light" ? "black" : "white"}
        >
          <Box w={["100%","100%","100%","40%","40%"]}>
            <Flex justifyContent={"space-between"}>
              <Center>
              <Text fontSize={["13px","20px","25px","27px","30px"]}>Subscription</Text></Center>
              <Center>
                <Text fontSize={["13px","13px","15px","17px","20px"]} color={"#0086FF"}>Upgrade</Text>
              </Center>
            </Flex>
            <Flex mt={"30px"} gap={"20px"}justifyContent={"space-between"} direction={["column","row","row","row","row"]}>
              <Box
                border={"2px solid #0086FF"}
                bgColor={theme === "light" ? "#F6F6F6" : "#111823"}
                p={"20px"}
                borderRadius={"15px"}
                w={"200px"}
              >
                <Center>
                  <Image h={"50px"} src={pro} />
                </Center>
                <Center>
                  <Flex gap={"10px"}>
                    <Center>
                      <Text fontSize={"30px"}>Pro</Text>
                    </Center>
                    <Center>
                      <Text color={"#0086FF"}>(Active)</Text>
                    </Center>
                  </Flex>
                </Center>
              </Box>
              <Box
                bgColor={theme === "light" ? "#F6F6F6" : "#111823"}
                p={"20px"}
                borderRadius={"15px"}
                w={"200px"}
              >
                <Center>
                  <Image h={"50px"} src={elite} />
                </Center>
                <Center>
                  <Center>
                    <Text fontSize={"30px"}>ELite</Text>
                  </Center>
                </Center>
              </Box>
            </Flex>
          </Box>
          <Box w={["100%","100%","100%","55%","55%"]}>
            <Flex justifyContent={"space-between"}>
              <Center>
              <Text fontSize={["13px","20px","25px","27px","30px"]}>Payment Methods</Text></Center>
              <Center>
                <Text fontSize={["13px","13px","15px","17px","20px"]} color={"#0086FF"}>Add New</Text>
              </Center>
            </Flex>
            <Flex
            p={"14px 0px"}
              direction={"column"}
              bgColor={theme === "light" ? "#F6F6F6" : "#111823"}
              mt={"30px"}
              borderRadius={"15px"}
            >
              <Center>
              <Flex gap={"20px"}>
                <Center>
                  <Image h={"50px"} src={master} />
                </Center>
                <Center>
                  <Text fontSize={"24px"}>**** **** **** 2431</Text>
                </Center>
              </Flex>
              </Center>
              <Center>
              <Flex mt={"30px"} gap={"20px"}>
                <Center>
                  <Image h={"20px"} src={visa} />
                </Center>
                <Center>
                  <Text fontSize={"24px"}>**** **** **** 2431</Text>
                </Center>
              </Flex>
              </Center>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </UserNav>
  );
};

export default UserProfile;
