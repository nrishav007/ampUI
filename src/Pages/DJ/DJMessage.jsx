import React, { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import { Box, Center, Flex, Image, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { IoIosCall } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { getDJMessageList } from "../../Redux/AppReducer/Action";
import axios from "axios";
const DJMessage = () => {
  const dispatch = useDispatch();
  const [chat, setChat] = useState([]);
  const [info, setInfo] = useState({ djId: "", userId: "" });
  const [userImage, setUserImage] = useState("");
  const user = useSelector((store) => store.auth.user);
  const token = useSelector((store) => store.auth.token);
  const dms = useSelector((store) => store.app.djDMs);
  const theme = useSelector((store) => store.app.theme);
  const toast = useToast();
  const handleChat = (el) => {
    const payload = {
      djId: user._id,
      userId: el._id[0]._id,
    };
    setUserImage(el._id[0].profileImage)
    setInfo(payload);
    axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/api/message/all-message`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setChat(res.data.data.messages);
        });
    setInterval(() => {
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/api/message/all-message`,
          info,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setChat(res.data.data.messages);
        });
    }, 100000);
  };
  useEffect(() => {
    dispatch(getDJMessageList({ id: user._id }, toast, token));
    setInterval(() => {
      dispatch(getDJMessageList({ id: user._id }, toast, token));
    }, 100000);
  }, []);
  return (
    <Nav>
      <Flex>
        <Box w={"30%"} h={"750px"} borderRight={"1px solid #787878"} p={"20px"}>
          <Flex direction={"column"}>
            {dms.map((el) => {
              let data = el._id[0];
              return (
                <Flex
                  gap={"5px"}
                  cursor={"pointer"}
                  onClick={() => handleChat(el)}
                >
                  <Image src={data.profileImage} />
                  <Center>
                    <Text
                      cursor={"pointer"}
                      color={theme === "light" ? "black" : "white"}
                    >
                      {data.email}
                    </Text>
                  </Center>
                </Flex>
              );
            })}
          </Flex>
        </Box>
        {
          chat.length>0?(
            <Box w={"full"}>
          <Box p={"15px"} mb={"30px"} bgColor={theme==="light"?"white":"#111823"}>
            <Flex justifyContent={"space-between"}>
              <Flex gap={"10px"}>
              <Image src={userImage} />
              <Text color={theme==="light"?"black":"white"}>Name</Text>
              </Flex>
              <Flex gap={"5px"} color={"white"}>
                <Center>
                <Box bgColor={"#0086FF"} borderRadius={"50%"} p={"10px"}><IoIosCall/></Box></Center>
                <Center>
                <Box bgColor={"#0086FF"} borderRadius={"50%"} p={"10px"}><BsThreeDotsVertical/></Box></Center>
              </Flex>
            </Flex>
          </Box>
          {chat.map((ele) => {
            if(ele.userType==="user"){
              return(
                <Flex ml={"10px"} gap={"10px"} mb={"10px"} color={"white"}>
                  <Image src={userImage} />
                  <Center>
                  <Text p={"10px 20px"} borderRadius={"15px"} bgColor={"#3A3A3A"}>{ele.message}</Text>
                  </Center>
                  </Flex>
              )
            }
          })}
        </Box>
          ):(<Box ml={"10px"} fontSize={"20px"} color={theme==="light"?"black":"white"}>Open any chat to see</Box>)
        }
      </Flex>
    </Nav>
  );
};

export default DJMessage;
