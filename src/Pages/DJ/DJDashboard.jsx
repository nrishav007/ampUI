import { Box, Center, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Nav from "../../Components/Nav";
import dj from "../../Assets/dj.jpg";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
const DJDashboard = () => {
  const theme=useSelector((store)=>store.app.theme);
  const addCommas = (nStr) => {
    nStr += "";
    let x = nStr.split(".");
    let x1 = x[0];
    let x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
  };
  return (
    <Nav>
      <Box pb={"20px"} pl={"57px"} pr={"42px"} >
        <SimpleGrid columns={[1,2,3]} pt={"20px"} gap={"30px"}>
          <Box h={"152px"} bgColor={theme==="light"?"#E0E0E0":"#181D29"} borderRadius={"15px"}>
            <Center>
              <Text
                pt={"23px"}
                color={theme==="light"?"#3A3A3A":"white"}
                fontStyle={"normal"}
                fontWeight={"600"}
                fontSize={["40px","40px","40px","60px"]}
                lineHeight={"60px"}
              >
                250
              </Text>
            </Center>
            <Center>
              <Text color={theme==="light"?"#3A3A3A":"white"} mt={"15px"}>
                Total Gigs
              </Text>
            </Center>
          </Box>
          <Box h={"152px"} bgColor={theme==="light"?"#E0E0E0":"#181D29"} borderRadius={"15px"}>
            <Center>
              <Text
                pt={"23px"}
                color={theme==="light"?"#3A3A3A":"white"}
                fontStyle={"normal"}
                fontWeight={"600"}
                fontSize={["40px","40px","40px","60px"]}
                lineHeight={"60px"}
              >
                $ {addCommas(1623)}
              </Text>
            </Center>
            <Center>
              <Text color={theme==="light"?"#3A3A3A":"white"} mt={"15px"}>
                Total Earning
              </Text>
            </Center>
          </Box>
          <Box h={"152px"} bgColor={theme==="light"?"#E0E0E0":"#181D29"} borderRadius={"15px"}>
            <Center>
              <Text
                pt={"23px"}
                color={theme==="light"?"#3A3A3A":"white"}
                fontStyle={"normal"}
                fontWeight={"600"}
                fontSize={["40px","40px","40px","60px"]}
                lineHeight={"60px"}
              >
                $ {addCommas(580)}
              </Text>
            </Center>
            <Center>
              <Text color={theme==="light"?"#3A3A3A":"white"} mt={"15px"}>
                Total Cost
              </Text>
            </Center>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={[1,2,3]} pt={"20px"} gap={"30px"}>
          <Box h={"152px"} bgColor={theme==="light"?"#E0E0E0":"#181D29"} borderRadius={"15px"}>
            <Center>
              <Text
                pt={"23px"}
                color={theme==="light"?"#3A3A3A":"white"}
                fontStyle={"normal"}
                fontWeight={"600"}
                fontSize={["40px","40px","40px","60px"]}
                lineHeight={"60px"}
              >
                250
              </Text>
            </Center>
            <Center>
              <Text color={theme==="light"?"#3A3A3A":"white"} mt={"15px"}>
                Total Gigs
              </Text>
            </Center>
          </Box>
          <Box h={"152px"} bgColor={theme==="light"?"#E0E0E0":"#181D29"} borderRadius={"15px"}>
            <Center>
              <Text
                pt={"23px"}
                color={theme==="light"?"#3A3A3A":"white"}
                fontStyle={"normal"}
                fontWeight={"600"}
                fontSize={["40px","40px","40px","60px"]}
                lineHeight={"60px"}
              >
                $ {addCommas(1623)}
              </Text>
            </Center>
            <Center>
              <Text color={theme==="light"?"#3A3A3A":"white"} mt={"15px"}>
                Total Earning
              </Text>
            </Center>
          </Box>
          <Box h={"152px"} bgColor={theme==="light"?"#E0E0E0":"#181D29"} borderRadius={"15px"}>
            <Center>
              <Text
                pt={"23px"}
                color={theme==="light"?"#3A3A3A":"white"}
                fontStyle={"normal"}
                fontWeight={"600"}
                fontSize={["40px","40px","40px","60px"]}
                lineHeight={"60px"}
              >
                $ {addCommas(1623)}
              </Text>
            </Center>
            <Center>
              <Text color={theme==="light"?"#3A3A3A":"white"} mt={"15px"}>
                Total Earning
              </Text>
            </Center>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={[1,2,3]} pt={"20px"} gap={"30px"}>
          <Box
            boxShadow={"0px 20px 50px rgba(0, 0, 0, 0.1)"}
            bgColor={"#FAAE57"}
            color={"white"}
            borderRadius={"15px"}
            p={"10px"}
          >
            <Flex
              gap={"15px"}
              direction={[
                "column",
                "column",
                "column",
                "column",
                "column",
                "row",
                "row",
                "row",
              ]}
            >
              <Box>
                <Image
                  borderRadius={"15px"}
                  h={[
                    "100px",
                    "150px",
                    "170px",
                    "190px",
                    "200px",
                    "140px",
                    "140px",
                    "140px",
                  ]}
                  src={dj}
                />
              </Box>
              <Center>
                <Flex
                  direction={"column"}
                  textAlign={"center"}
                  gap={"10px"}
                  fontFamily={"poppins"}
                  fontWeight={"600"}
                  fontSize={["15px","15px","20px","28px"]}
                  lineHeight={"42px"}
                >
                  <Box>
                    <Text>Upcoming Events</Text>
                  </Box>
                  <Box>
                    <Text>Triator Band</Text>
                  </Box>
                </Flex>
              </Center>
            </Flex>
          </Box>
          <Box
            boxShadow={"0px 20px 50px rgba(0, 0, 0, 0.1)"}
            bgColor={"#38C96A"}
            color={"white"}
            borderRadius={"15px"}
            p={"10px"}
          >
            <Flex
              gap={"15px"}
              direction={[
                "column",
                "column",
                "column",
                "column",
                "column",
                "row",
                "row",
                "row",
              ]}
            >
              <Box>
                <Image
                  borderRadius={"15px"}
                  h={[
                    "100px",
                    "150px",
                    "170px",
                    "190px",
                    "200px",
                    "140px",
                    "140px",
                    "140px",
                  ]}
                  src={dj}
                />
              </Box>
              <Center>
                <Flex
                  direction={"column"}
                  textAlign={"center"}
                  gap={"10px"}
                  fontFamily={"poppins"}
                  fontWeight={"600"}
                  fontSize={["15px","15px","20px","28px"]}
                  lineHeight={"42px"}
                >
                  <Box>
                    <Text>Reviews / Rating</Text>
                  </Box>
                  <Center>
                    <Flex gap={"5px"}>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </Flex>
                  </Center>
                </Flex>
              </Center>
            </Flex>
          </Box>
          <Box
            boxShadow={"0px 20px 50px rgba(0, 0, 0, 0.1)"}
            bgColor={"#7673FE"}
            color={"white"}
            borderRadius={"15px"}
            p={"10px"}
          >
            <Flex
              gap={"15px"}
              direction={[
                "column",
                "column",
                "column",
                "column",
                "column",
                "row",
                "row",
                "row",
              ]}
            >
              <Box>
                <Image
                  borderRadius={"15px"}
                  h={[
                    "100px",
                    "150px",
                    "170px",
                    "190px",
                    "200px",
                    "140px",
                    "140px",
                    "140px",
                  ]}
                  src={dj}
                />
              </Box>
              <Center>
                <Flex
                  direction={"column"}
                  textAlign={"center"}
                  gap={"10px"}
                  fontFamily={"poppins"}
                  fontWeight={"600"}
                  fontSize={["15px","15px","20px","28px"]}
                  lineHeight={"42px"}
                >
                  <Box>
                    <Text>Reviews / Rating</Text>
                  </Box>
                  <Center>
                    <Flex gap={"5px"}>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </Flex>
                  </Center>
                </Flex>
              </Center>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </Nav>
  );
};

export default DJDashboard;
