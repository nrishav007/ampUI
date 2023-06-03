import React from "react";
import Nav from "../../Components/Nav";
import banner from "../../Assets/banner.jpg";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";
const DJWeek = () => {
  return (
    <Nav>
      <Box p={"0px 41px 0px 54px"} pt={"30px"} h={"800px"} bgColor={"white"}>
        <Flex gap={"42px"}>
          <Box w={"1056px"} h={"387px"}>
            <Image src={banner} />
            <Flex direction={["column","column","row","row",]} gap={"24px"} mt={"138px"} textAlign={"left"} mb={"100px"}>
              <Box w={["100%","100%","50%","50%"]}>
                <Select bgColor={"#E0E0E0"}>
                  <option>Ad Duration</option>
                </Select>
                <Text
                  fontStyle={"normal"}
                  fontSize={"16px"}
                  fontFamily={"Poppins"}
                  fontWeight={"400"}
                  color={"#787878"}
                  mt={"15px"}
                >
                  How long will your ad run?
                </Text>
              </Box>
              <Box w={["100%","100%","50%","50%"]}>
                <Select bgColor={"#E0E0E0"}>
                  <option>Cost</option>
                </Select>
                <Text
                  fontStyle={"normal"}
                  fontSize={"16px"}
                  fontFamily={"Poppins"}
                  fontWeight={"400"}
                  color={"#787878"}
                  mt={"15px"}
                >
                  How much do you want to spend?
                </Text>
              </Box>
            </Flex>
            <Flex direction={["column","column","row","row",]} gap={"24px"} textAlign={"left"} mb={"100px"}>
              <Box w={["100%","100%","50%","50%"]}>
                <Select bgColor={"#E0E0E0"}>
                  <option>Location</option>
                </Select>
                <Text
                  fontStyle={"normal"}
                  fontSize={"16px"}
                  fontFamily={"Poppins"}
                  fontWeight={"400"}
                  color={"#787878"}
                  mt={"15px"}
                >
                  Which location do you want to target?
                </Text>
              </Box>
              <Box w={["100%","100%","50%","50%"]}>
                <Select bgColor={"#E0E0E0"}>
                  <option>Display Ad Immediately</option>
                </Select>
                <Text
                  fontStyle={"normal"}
                  fontSize={"16px"}
                  fontFamily={"Poppins"}
                  fontWeight={"400"}
                  color={"#787878"}
                  mt={"15px"}
                >
                  We'll review and respond to you...
                </Text>
              </Box>
            </Flex>
            <Button
              p={"0px 30px"}
              variant={"unstyled"}
              color={"white"}
              bgColor={"#0086FF"}
              mb={"100px"}
            >
              Submit
            </Button>
          </Box>
          <Box
            h={"500px"}
            bgColor={"#F6F6F6"}
            w={"500px"}
            boxShadow={"0px 20px 50px rgba(0, 0, 0, 0.1)"}
          >
            <Center>
              <Text
                fontFamily={"Inter"}
                fontStyle={"normal"}
                fontWeight={"700"}
                fontSize={"24px"}
              >
                Gigs
              </Text>
            </Center>
            <Box mt={"20px"} h={"200px"}></Box>
            <Flex
              fontFamily={"Inter"}
              fontWeight={"600"}
              fontSize={"18px"}
              color={"#3A3A3A"}
              p={"0px 10px"}
              mt={"30px"}
              justifyContent={"space-between"}
            >
              <Text>NYC</Text>
              <Text>$902</Text>
            </Flex>
            <Flex
              fontFamily={"Inter"}
              fontWeight={"600"}
              fontSize={"18px"}
              color={"#3A3A3A"}
              p={"0px 10px"}
              mt={"30px"}
              justifyContent={"space-between"}
            >
              <Text>Alasca</Text>
              <Text>$802</Text>
            </Flex>
            <Flex
              fontFamily={"Inter"}
              fontWeight={"600"}
              fontSize={"18px"}
              color={"#3A3A3A"}
              p={"0px 10px"}
              mt={"30px"}
              justifyContent={"space-between"}
            >
              <Text>Egypt</Text>
              <Text>$702</Text>
            </Flex>
            <Flex
              fontFamily={"Inter"}
              fontWeight={"600"}
              fontSize={"18px"}
              color={"#3A3A3A"}
              p={"0px 10px"}
              mt={"30px"}
              justifyContent={"space-between"}
            >
              <Text>India</Text>
              <Text>$502</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Nav>
  );
};

export default DJWeek;
