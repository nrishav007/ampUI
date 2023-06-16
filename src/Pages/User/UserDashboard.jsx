import React from "react";
import UserNav from "../../Components/UserNav";
import { Box, Center, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RxDotsVertical } from 'react-icons/rx';
import { BsFillCalendarEventFill,BsFillPlayFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
const UserDashboard = () => {
  const theme = useSelector((store) => store.app.theme);
  let data = [
    {
      name: "Dj Khalid",
      genre: ["Rock", "Metal"],
      rating: 4,
      date: "Apr 26, 2023",
    },
    {
      name: "Dj Khalid",
      genre: ["Rock", "Metal"],
      rating: 4,
      date: "Apr 26, 2023",
    },
    {
      name: "Dj Khalid",
      genre: ["Rock", "Metal"],
      rating: 4,
      date: "Apr 26, 2023",
    },
    {
      name: "Dj Khalid",
      genre: ["Rock", "Metal"],
      rating: 4,
      date: "Apr 26, 2023",
    },
    {
      name: "Dj Khalid",
      genre: ["Rock", "Metal"],
      rating: 4,
      date: "Apr 26, 2023",
    },
    {
      name: "Dj Khalid",
      genre: ["Rock", "Metal"],
      rating: 4,
      date: "Apr 26, 2023",
    },
    {
      name: "Dj Khalid",
      genre: ["Rock", "Metal"],
      rating: 4,
      date: "Apr 26, 2023",
    },
    {
      name: "Dj Khalid",
      genre: ["Rock", "Metal"],
      rating: 4,
      date: "Apr 26, 2023",
    },
    {
      name: "Dj Khalid",
      genre: ["Rock", "Metal"],
      rating: 4,
      date: "Apr 26, 2023",
    },
    {
      name: "Dj Khalid",
      genre: ["Rock", "Metal"],
      rating: 4,
      date: "Apr 26, 2023",
    },
    {
      name: "Dj Khalid",
      genre: ["Rock", "Metal"],
      rating: 4,
      date: "Apr 26, 2023",
    },
    {
      name: "Dj Khalid",
      genre: ["Rock", "Metal"],
      rating: 4,
      date: "Apr 26, 2023",
    },
    {
      name: "Dj Khalid",
      genre: ["Rock", "Metal"],
      rating: 4,
      date: "Apr 26, 2023",
    },
    {
      name: "Dj Khalid",
      genre: ["Rock", "Metal"],
      rating: 4,
      date: "Apr 26, 2023",
    },
    {
      name: "Dj Khalid",
      genre: ["Rock", "Metal"],
      rating: 4,
      date: "Apr 26, 2023",
    },
    {
      name: "Dj Khalid",
      genre: ["Rock", "Metal"],
      rating: 4,
      date: "Apr 26, 2023",
    },
    
  ];
  return (
    <UserNav>
      <Box minH={"800px"} p={"20px"}>
        <Box border={"1px solid red"} h={"300px"} w={"100%"}></Box>
        <Text
          mt={"40px"}
          mb={"20px"}
          color={theme === "light" ? "#3A3A3A" : "white"}
          textAlign={"left"}
          fontSize={"25px"}
          fontWeight={"600"}
        >
          Available Dj's
        </Text>
        <SimpleGrid columns={[1,1,2,3]} gap={"20px"}>
          {
            data.map((el,i)=>{

              return(
                <Box color={"white"}  borderRadius={"15px"} key={i} p={"10px"} bgColor={i%2===0?"#63D471":"#B16668"}>
                  <Flex gap={"10px"}>
                  <Image borderRadius={"15px"}w={"100px"} h={"100px"} src={"https://media.gettyimages.com/id/694021603/photo/smiling-black-dj-on-urban-rooftop.jpg?s=612x612&w=gi&k=20&c=vwZnB8WoVQwGdCDCI1Z0ex527y7m9Y8BBTYaTNCWB5Y="} />
                  <Box textAlign={"left"} w={"100%"}>
                    <Flex justifyContent={"space-between"} gap={"10px"}>
                      <Flex gap={"5px"} fontSize={"12px"}>
                        {el.genre.map((name)=>{
                          return(
                            <Text>{name}</Text>
                          )
                        })}
                      </Flex>
                      <Box fontSize={"20px"}>
                      <RxDotsVertical/></Box>
                    </Flex>
                    <Text fontWeight={"bold"} fontSize={"22px"}>{el.name}</Text>
                    <Flex gap={"5px"} fontSize={"14px"}>
                      <Center>
                      <BsFillCalendarEventFill/></Center>
                      <Center>
                      <Text>Until</Text></Center>
                      <Center>
                      <Text>{el.date}</Text></Center>
                    </Flex>
                    <Flex justifyContent={"space-between"}>
                    <Flex gap={"10px"}>
                    <Center>
                    {
                        el.rating===1?(
                          <Flex>
                            <AiFillStar/>
                          </Flex>
                        ):el.rating===2?(
                          <Flex>
                            <AiFillStar/>
                            <AiFillStar/>
                          </Flex>
                        ):el.rating===3?(
                          <Flex>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                          </Flex>
                        ):el.rating===4?(
                          <Flex>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                          </Flex>
                        ):el.rating===5?(
                          <Flex>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                          </Flex>
                        ):null
                      }
                    </Center>
                      <Center>
                      <Text fontSize={"13px"}>{el.rating}.0 Rating</Text></Center>
                    </Flex>
                    <Box p={"5px"} borderRadius={"50%"} bgColor={"white"} color={i%2===0?"#63D471":"#B16668"}>
                      <BsFillPlayFill/>
                    </Box>
                    </Flex>
                  </Box>
                  </Flex>
                </Box>
              )
            })
          }
        </SimpleGrid>
      </Box>
    </UserNav>
  );
};

export default UserDashboard;
