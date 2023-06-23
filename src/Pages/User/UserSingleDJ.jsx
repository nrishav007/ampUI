import React from "react";
import UserNav from "../../Components/UserNav";
import { Box, Center, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { FaConciergeBell } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import profile from "../../Assets/profile.png";
import { useNavigate, useParams } from "react-router-dom";
const UserSingleDJ = () => {
  const navigate = useNavigate();
  const dj = useSelector((store) => store.app.singleDJ);
  const { id } = useParams();
  const request=()=>{
    navigate(`/user/djbook/${id}`)
  }
  const theme = useSelector((store) => store.app.theme);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dat = new Date();
  const cmonth = month[dat.getMonth()];
  const year = dat.getFullYear();
  const monthImage = [
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const rating = [
    {
      name: "Robert Smith",
      description:
        "Aliquam vitae dolor eu quam suscipit sodales. Curabitur metus leo, gravida eleifend magna in, fringilla finibus purus. Pellentesque quis lorem massa. Suspendisse eget nulla vel dolor rhoncus..",
      rate: 3,
    },
    {
      name: "Robert Smith",
      description:
        "Aliquam vitae dolor eu quam suscipit sodales. Curabitur metus leo, gravida eleifend magna in, fringilla finibus purus. Pellentesque quis lorem massa. Suspendisse eget nulla vel dolor rhoncus..",
      rate: 4,
    },
    {
      name: "Robert Smith",
      description:
        "Aliquam vitae dolor eu quam suscipit sodales. Curabitur metus leo, gravida eleifend magna in, fringilla finibus purus. Pellentesque quis lorem massa. Suspendisse eget nulla vel dolor rhoncus..",
      rate: 5,
    },
  ];
  console.log(dj.profileImage)
  return (
    <UserNav>
      <Box
        minH={"800px"}
        ml={["10px", "10px", "10px", "30px", "30px"]}
        color={theme === "light" ? "black" : "white"}
      >
        <Flex
          justifyContent={"space-between"}
          gap={"30px"}
          direction={["column", "column", "column", "row"]}
        >
          <Box>
            <Box
              borderRadius={"15px"}
              h={"400px"}
              w={["full", "full", "full", "350px"]}
              vorder={"1px solid red"}
              backgroundImage={
                `url(${dj.profileImage})`
              }
              backgroundSize={"cover"}
              backgroundRepeat={"no-repeat"}
              backgroundPosition={"center"}
            >
              <Flex
                gap={"10px"}
                direction={[
                  "column",
                  "row-reverse",
                  "row-reverse",
                  "row-reverse",
                ]}
                p={"10px"}
                color={"white"}
                fontSize={"14px"}
              >
                <Flex
                  bgColor={"rgba(58, 58, 58, 0.5)"}
                  p={"5px 10px"}
                  gap={"5px"}
                  borderRadius={"10px"}
                >
                  <Center>
                    <BiCommentDetail />
                  </Center>
                  <Text>Message</Text>
                </Flex>
                <Flex
                  bgColor={"rgba(58, 58, 58, 0.5)"}
                  p={"5px 10px"}
                  gap={"5px"}
                  borderRadius={"10px"}
                  cursor={"pointer"}
                  onClick={request}
                >
                  <Center>
                    <FaConciergeBell />
                  </Center>
                  <Text cursor={"pointer"}>Request</Text>
                </Flex>
              </Flex>
            </Box>
            <Flex
              mt={"10px"}
              justifyContent={"space-between"}
              direction={["column", "row", "row", "row"]}
            >
              <Text fontWeight={"600"} fontSize={"22px"}>
                DJ Khalid
              </Text>
              <Center>
                <Flex>
                  <Box fontSize={"20px"} color={"#FAAE57"}>
                    <AiFillStar />
                  </Box>
                  <Box fontSize={"20px"} color={"#FAAE57"}>
                    <AiFillStar />
                  </Box>
                  <Box fontSize={"20px"} color={"#FAAE57"}>
                    <AiFillStar />
                  </Box>
                  <Box fontSize={"20px"} color={"#FAAE57"}>
                    <AiFillStar />
                  </Box>
                  <Box fontSize={"20px"} color={"#B9B9B9"}>
                    <AiFillStar />
                  </Box>
                  <Text ml={"10px"} fontWeight={"500"}>
                    4.0
                  </Text>
                </Flex>
              </Center>
            </Flex>
            <Box>
              <Text
                mt={"10px"}
                textAlign={"left"}
                w={["full", "full", "full", "350px"]}
              >
                Aliquam vitae dolor eu quam suscipit sodales. Curabitur metus
                leo, gravida eleifend magna in, fringilla finibus purus.
                Pellentesque quis lorem massa. Suspendisse eget nulla vel dolor
                rhoncus..
              </Text>
            </Box>
            <Flex
              mt={"20px"}
              gap={"10px"}
              direction={["column", "row", "row", "row"]}
            >
              <Box
                bgColor={"#63D471"}
                color={"white"}
                p={"5px 10px"}
                borderRadius={"15px"}
              >
                Rock
              </Box>
              <Box
                bgColor={"#63D471"}
                color={"white"}
                p={"5px 10px"}
                borderRadius={"15px"}
              >
                Rock
              </Box>
              <Box
                bgColor={"#63D471"}
                color={"white"}
                p={"5px 10px"}
                borderRadius={"15px"}
              >
                Rock
              </Box>
            </Flex>
          </Box>
          <Box textAlign={"left"} w={"full"}>
            <Text
              fontSize={"30px"}
              color={theme === "light" ? "black" : "white"}
            >
              Upcoming Events
            </Text>
            <Box
              borderRadius={"15px"}
              mt={"10px"}
              pt={"20px"}
              pb={"10px"}
              bgColor={theme === "light" ? "#F6F6F6" : "#111823"}
            >
              <Flex
                p={"0px 20px"}
                justifyContent={"space-between"}
                pb={"20px"}
                direction={["column", "column", "column", "row"]}
                borderBottom={"0.5px solid #B9B9B9"}
              >
                <Text fontSize={"20px"} fontWeight={"500"}>
                  {cmonth}, {year}
                </Text>
                <Flex gap={"10px"} direction={["column", "row", "row", "row"]}>
                  <Flex gap={"5px"} color={"#0086FF"}>
                    <Center>
                      <BsFillCheckSquareFill />
                    </Center>
                    <Center>
                      <Text>Open</Text>
                    </Center>
                  </Flex>
                  <Flex gap={"5px"} color={"#B9B9B9"}>
                    <Center>
                      <BsFillCheckSquareFill />
                    </Center>
                    <Center>
                      <Text>Booked</Text>
                    </Center>
                  </Flex>
                  <Flex gap={"5px"} color={"#B9B9B9"}>
                    <Center>
                      <BsFillCheckSquareFill />
                    </Center>
                    <Center>
                      <Text>Off</Text>
                    </Center>
                  </Flex>
                </Flex>
              </Flex>
              <Box p={"10px"}>
                <SimpleGrid gap={"10px"} columns={"7"}>
                  <Box>Sat</Box>
                  <Box>Sun</Box>
                  <Box>Mon</Box>
                  <Box>Tue</Box>
                  <Box>Wed</Box>
                  <Box>Thu</Box>
                  <Box>Fri</Box>
                </SimpleGrid>
                <SimpleGrid mt={"10px"} gap={"10px"} columns={"7"}>
                  {monthImage.map(({ image }) => {
                    return (
                      <Box>
                        <Image src={image} />
                      </Box>
                    );
                  })}
                </SimpleGrid>
              </Box>
            </Box>
            <Box>
              <Text
                fontSize={"30px"}
                color={theme === "light" ? "black" : "white"}
              >
                Ratings
              </Text>
              {rating.map(({ name, rate, description }) => {
                return (
                  <Box mt={"10px"} mb={"20px"}>
                    <Flex
                      gap={"10px"}
                      direction={["column", "row", "row", "row"]}
                    >
                      <Image src={profile} h={"50px"} w={"50px"} />
                      <Flex gap={"10px"} direction={"column"}>
                        <Flex
                          justifyContent={"space-between"}
                          gap={"10px"}
                          direction={["column", "row", "row", "row"]}
                        >
                          <Text>{name}</Text>
                          <Flex>
                            <Box
                              fontSize={"20px"}
                              color={rate >= 1 ? "#0086FF" : "#B9B9B9"}
                            >
                              <AiFillStar />
                            </Box>
                            <Box
                              fontSize={"20px"}
                              color={rate >= 2 ? "#0086FF" : "#B9B9B9"}
                            >
                              <AiFillStar />
                            </Box>
                            <Box
                              fontSize={"20px"}
                              color={rate >= 3 ? "#0086FF" : "#B9B9B9"}
                            >
                              <AiFillStar />
                            </Box>
                            <Box
                              fontSize={"20px"}
                              color={rate >= 4 ? "#0086FF" : "#B9B9B9"}
                            >
                              <AiFillStar />
                            </Box>
                            <Box
                              fontSize={"20px"}
                              color={rate >= 5 ? "#0086FF" : "#B9B9B9"}
                            >
                              <AiFillStar />
                            </Box>
                            <Text ml={"10px"} fontWeight={"500"}>
                              {rate.toFixed(1)}
                            </Text>
                          </Flex>
                        </Flex>
                        <Text>{description}</Text>
                      </Flex>
                    </Flex>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Flex>
      </Box>
    </UserNav>
  );
};

export default UserSingleDJ;
