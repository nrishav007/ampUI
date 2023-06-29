import React, { useEffect, useRef, useState } from "react";
import Nav from "../../Components/Nav";
import {
  Box,
  Center,
  Flex,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePaperClip } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
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
  let msg=useRef();
  
  const getMessage = () => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  };
  const handleChat = (el) => {
    const payload = {
      djId: user._id,
      userId: el._id[0]._id,
    };
    setUserImage(el._id[0].profileImage);
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
      getMessage();
    }, 100000);
  };
  const sendMessage=()=>{
    let payload={...info}
    payload.message=msg.current.value;
    payload.userType="dj";
    try {
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/message/create-message`,payload,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(()=>{
        getMessage();
        msg.current.value="";
      })
    } catch (error) {
      getMessage();
    }
  }
  useEffect(() => {
    dispatch(getDJMessageList({ id: user._id }, toast, token));
    setInterval(() => {
      dispatch(getDJMessageList({ id: user._id }, toast, token));
    }, 100000);
  }, []);
  return (
    <Nav>
      <Flex>
        <Box w={"30%"} borderRight={"1px solid #787878"} p={"20px"} h={window.innerHeight+150}>
          <Flex direction={"column"}>
            {dms.map((el,i) => {
              let data = el._id[0];
              return (
                <Flex key={i}
                  gap={"5px"}
                  direction={["column", "column", "column", "row"]}
                  cursor={"pointer"}
                  onClick={() => handleChat(el)}
                >
                  <Image src={data.profileImage} />
                  <Center>
                    <Text
                      cursor={"pointer"}
                      fontSize={["14px", "16px", "18px", "20px"]}
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
        {chat.length > 0 ? (
          <Box w={"full"} h={[window.innerHeight,window.innerHeight,window.innerHeight,window.innerHeight]}>
            <Flex
              direction={"column"}
              justifyContent={"space-between"}
              h={[window.innerHeight - 150,window.innerHeight - 150,window.innerHeight - 150,window.innerHeight - 100]}
            >
              <Box>
                <Box
                  p={"15px"}
                  bgColor={theme === "light" ? "white" : "#111823"}
                >
                  <Flex
                    justifyContent={"space-between"}
                    direction={["column", "row", "row", "row"]}
                  >
                    <Flex
                      gap={"10px"}
                      direction={["column", "row", "row", "row"]}
                    >
                      <Image h={"50px"} w={"50px"} src={userImage} />
                      <Text color={theme === "light" ? "black" : "white"}>
                        Name
                      </Text>
                    </Flex>
                    <Flex gap={"5px"} color={"white"}>
                      <Center>
                        <Box
                          bgColor={"#0086FF"}
                          borderRadius={"50%"}
                          p={"10px"}
                        >
                          <IoIosCall />
                        </Box>
                      </Center>
                      <Center>
                        <Box
                          bgColor={"#0086FF"}
                          borderRadius={"50%"}
                          p={"10px"}
                        >
                          <BsThreeDotsVertical />
                        </Box>
                      </Center>
                    </Flex>
                  </Flex>
                </Box>
                <Box h={"370px"} overflow={"scroll"} sx={{
                              "::-webkit-scrollbar": {
                                display: "none",
                              },
                            }}>
                {chat.map((ele,i) => {
                  if (ele.userType === "user") {
                    return (
                      <Flex key={i}
                        ml={"10px"}
                        gap={"10px"}
                        mb={"10px"}
                        color={"white"}
                      >
                        <Image src={userImage} />
                        <Center>
                          <Text
                            p={"10px 20px"}
                            borderRadius={"15px"}
                            bgColor={"#3A3A3A"}
                          >
                            {ele.message}
                          </Text>
                        </Center>
                      </Flex>
                    );
                  }
                  else{
                    return (
                      <Flex
                      direction={"row-reverse"}
                        ml={"10px"}
                        gap={"10px"}
                        mb={"10px"}
                        color={"white"}
                      >
                        
                        <Center>
                          <Text
                            p={"10px 20px"}
                            borderRadius={"15px"}
                            bgColor={"#3A3A3A"}
                          >
                            {ele.message}
                          </Text>
                        </Center>
                        <Image src={userImage} />
                      </Flex>
                    );
                  }
                })}
                </Box>
              </Box>
              <Flex
                bgColor={theme === "light" ? "white" : "#111823"}
                p={"10px"}
                gap={"10px"}
                m={"20px"}
                borderRadius={"15px"}
              >
                <Center>
                  <Box color={"#787878"} fontSize={"20px"}>
                    <AiOutlinePaperClip />
                  </Box>
                </Center>
                <Input
                ref={msg}
                  variant={"unstyled"}
                  placeholder="Enter Text"
                  color={theme === "light" ? "black" : "white"}
                />
                <Center>
                  <Box color={"#0086FF"} fontSize={"20px"} cursor={"pointer"} onClick={sendMessage}>
                    <BsFillSendFill />
                  </Box>
                </Center>
              </Flex>
            </Flex>
          </Box>
        ) : (
          <Box
            ml={"10px"}
            fontSize={"20px"}
            color={theme === "light" ? "black" : "white"}
          >
            Open any chat to see
          </Box>
        )}
      </Flex>
    </Nav>
  );
};

export default DJMessage;
