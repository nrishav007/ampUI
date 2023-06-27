import React, { useState } from "react";
import Nav from "../../Components/Nav";
import banner from "../../Assets/banner.jpg";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import djweek from "../../Assets/djweek.png"
import axios from "axios";
const DJWeek = () => {
  const theme = useSelector((store) => store.app.theme);
  const token = useSelector((store) => store.auth.token);
  const toast = useToast();
  const [weeksubmit,setWeeksubmit]=useState({
    addDuration:"",
    cost:0,
    location:"",
    review:""
  })
  const djWeeksubmit=(e)=>{
    let temp={...weeksubmit};
    temp[e.target.name]=e.target.value;
    setWeeksubmit(temp);
  }
  const handleSubmit=()=>{
    try {
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/djOfWeek/create-dj-of-week`,weeksubmit,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res)=>{
        toast({
          title: res.data.message,
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Nav>
      <Box p={"0px 41px 0px 54px"} pt={"30px"}>
        <Flex gap={"42px"} direction={["column-reverse","column-reverse","row","row"]}>
          <Box>
            <Image src={banner} />
            <Flex
              direction={["column", "column", "row", "row"]}
              gap={"24px"}
              mt={["50px","50px","80px","138px"]}
              textAlign={"left"}
              mb={["40px","40px","40px","100px"]}
            >
              <Box w={["100%", "100%", "50%", "50%"]}>
                <Input
                  bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
                  color={theme === "light" ? "#787878" : "#B9B9B9"}
                  placeholder="Ad Duration"
                  name="addDuration"
                  onChange={(e)=>djWeeksubmit(e)}
                />
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
              <Box w={["100%", "100%", "50%", "50%"]}>
                <Input
                  bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
                  color={theme === "light" ? "#787878" : "#B9B9B9"}
                  placeholder="Cost"
                  name="cost"
                  type={"number"}
                  onChange={(e)=>djWeeksubmit(e)}
                />
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
            <Flex
              direction={["column", "column", "row", "row"]}
              gap={"24px"}
              textAlign={"left"}
              mb={"50px"}
            >
              <Box w={["100%", "100%", "50%", "50%"]}>
                <Input
                  bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
                  color={theme === "light" ? "#787878" : "#B9B9B9"}
                  placeholder="Location"
                  name="location"
                  onChange={(e)=>djWeeksubmit(e)}
                />
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
              <Box w={["100%", "100%", "50%", "50%"]}>
                <Input
                  bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
                  color={theme === "light" ? "#787878" : "#B9B9B9"}
                  placeholder="Display Ad Immediately"
                  name="review"
                  onChange={(e)=>djWeeksubmit(e)}
                />
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
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
          <Box
            w={["full","full","full","500px"]}
            h={"100%"}
            pb={"10px"}
            boxShadow={"0px 20px 50px rgba(0, 0, 0, 0.1)"}
            color={theme === "light" ? "#3A3A3A" : "white"}
            bgColor={theme === "light" ? "white" : "#111823"}
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
            <Center>
            <Image src={djweek} />
            </Center>
            <Box mt={"20px"}></Box>
            <Flex
              fontFamily={"Inter"}
              fontWeight={"600"}
              fontSize={"18px"}
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
