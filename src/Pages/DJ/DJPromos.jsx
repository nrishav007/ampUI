import { Box, Center, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Nav from "../../Components/Nav";
import follow_djpromo from "../../Assets/follow_djpromo.png";

import { BsFillPersonFill } from 'react-icons/bs';
import { FaConciergeBell } from 'react-icons/fa';
import { useSelector } from "react-redux";
const DJPromos = () => {
  const theme = useSelector((store) => store.app.theme);
  const [data, setData] = useState([
    {
      image:
        "https://st3.depositphotos.com/12985790/17362/i/1600/depositphotos_173622618-stock-photo-dj-with-sound-mixer-and.jpg",
      name: "DJ Khalid",
      description:
        "Aliquam vitae dolor eu quam suscipit sodales. Curabitur metus leo, gravida eleifend magna in, fringilla finibus purus. Pellentesque quis lorem massa. Suspendisse eget nulla vel dolor rhoncus..",
      genre: ["Hiphop", "Rock"],
    },
    {
      image:
        "https://st3.depositphotos.com/12985790/17362/i/1600/depositphotos_173622618-stock-photo-dj-with-sound-mixer-and.jpg",
      name: "DJ Khalid",
      description:
        "Aliquam vitae dolor eu quam suscipit sodales. Curabitur metus leo, gravida eleifend magna in, fringilla finibus purus. Pellentesque quis lorem massa. Suspendisse eget nulla vel dolor rhoncus..",
      genre: ["Hiphop", "Rock"],
    },
  ]);
  return (
    <Nav>
      <Box minH={"750px"}>
        <SimpleGrid
          columns={[1, 1, 1, 2]}
          gap={"30px"}
          justifyContent={"space-around"}
          ml={"100px"}
          mr={"100px"}
        >
          {data.map((el,i) => {
            return (
              <Box key={i}
                bgColor={theme === "light" ? "#F6F6F6" : "#111823"}
                p={"30px"}
                borderRadius={"15px"}
              >
                <Image borderRadius={"15px"} src={el.image} />
                <Flex
                  mt={"50px"}
                  justifyContent={"space-between"}
                  gap={"10px"}
                  direction={["column", "column", "column", "column", "row"]}
                >
                  <Text
                    color={theme === "light" ? "#181D29" : "#FFFFFF"}
                    textAlign={"left"}
                    fontWeight={"700"}
                    fontSize={"20px"}
                  >
                    {el.name}
                  </Text>
                  <Flex
                    gap={"10px"}
                    color={theme === "light" ? "#181D29" : "#787878"}
                    direction={["column","column","row","row",]}
                  >
                    <Flex gap={"5px"} >
                      <Center>
                        <Image h={"10px"} src={follow_djpromo} />
                      </Center>
                      <Center>
                        <Text color={"#0086FF"}>Follow</Text>
                      </Center>
                    </Flex>
                    <Flex gap={"5px"}>
                      <Center>
                        <BsFillPersonFill/>
                      </Center>
                      <Center>
                        <Text>Profile</Text>
                      </Center>
                    </Flex>
                    <Flex gap={"5px"}>
                      <Center>
                        <FaConciergeBell />
                      </Center>
                      <Center>
                        <Text>Request</Text>
                      </Center>
                    </Flex>
                  </Flex>
                </Flex>
                <Text
                  color={theme === "light" ? "#B9B9B9" : "#B9B9B9"}
                  mt={"30px"}
                  textAlign={"left"}
                >
                  {el.description}
                </Text>
                <Flex gap={"10px"} mt={"20px"} direction={["column","column","row","row",]}>
                  {el.genre.map((elem,i) => {
                    return (
                      <Box
                      key={i}
                        borderRadius={"18px"}
                        color={"white"}
                        bgColor={theme==="light"?"#6D6D6D":"#343E57"}
                        p={"5px 20px"}
                      >
                        {elem}
                      </Box>
                    );
                  })}
                </Flex>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Nav>
  );
};

export default DJPromos;
