import React, { useEffect, useState } from 'react'
import Nav from "../../Components/Nav";
import axios from 'axios';
import { AiFillStar } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
const DJReviews = () => {
    const [rate,setRate]=useState([]);
    const user=useSelector((store)=>store.auth.user);
    const token=useSelector((store)=>store.auth.token);
    useEffect(()=>{
        axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/api/booking/get-dj-rating/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setRate(res.data.data.rating);
      });
    },[])
  return (
    <Nav>
        {rate.map(({ feedback, rating, userId },i) => {
                return (
                  <Box key={i} m={"10px"} mb={"20px"} borderRadius={"10px"} p={"20px"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
                    <Flex
                      gap={"10px"}
                      direction={["column", "row", "row", "row"]}
                    >
                      <Image src={userId.profileImage} h={"50px"} w={"50px"} />
                      <Flex gap={"10px"} direction={"column"} w={"100%"}>
                        <Flex
                          justifyContent={"space-between"}
                          gap={"10px"}
                          direction={["column", "row", "row", "row"]}
                        >
                          <Text>{userId.djName}</Text>
                          <Flex>
                            <Box
                              fontSize={"20px"}
                              color={rating - 1 >= 0 ? "#0086FF" : "#B9B9B9"}
                            >
                              <AiFillStar />
                            </Box>
                            <Box
                              fontSize={"20px"}
                              color={rating - 2 >= 0 ? "#0086FF" : "#B9B9B9"}
                            >
                              <AiFillStar />
                            </Box>
                            <Box
                              fontSize={"20px"}
                              color={rating - 3 >= 0 ? "#0086FF" : "#B9B9B9"}
                            >
                              <AiFillStar />
                            </Box>
                            <Box
                              fontSize={"20px"}
                              color={rating - 4 >= 0 ? "#0086FF" : "#B9B9B9"}
                            >
                              <AiFillStar />
                            </Box>
                            <Box
                              fontSize={"20px"}
                              color={rating - 5 >= 0 ? "#0086FF" : "#B9B9B9"}
                            >
                              <AiFillStar />
                            </Box>
                            <Text ml={"10px"} fontWeight={"500"}>
                              {rating.toFixed(1)}
                            </Text>
                          </Flex>
                        </Flex>
                        <Text textAlign={"left"}>{feedback}</Text>
                      </Flex>
                    </Flex>
                  </Box>
                );
              })}
    </Nav>
  )
}

export default DJReviews