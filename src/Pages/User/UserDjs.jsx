import React, { useEffect } from "react";
import UserNav from "../../Components/UserNav";
import { Box, Center, Flex, Image, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RxDotsVertical } from 'react-icons/rx';
import { BsFillCalendarEventFill,BsFillPlayFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { getUserDJList, userSingleDJ } from "../../Redux/AppReducer/Action";
import { useNavigate } from "react-router-dom";
const UserDjs = () => {
  const theme = useSelector((store) => store.app.theme);
  const token = useSelector((store) => store.auth.token);
  const djData=useSelector((store)=>store.app.userDJList);
  const toast=useToast();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleSingleDJ=(dj)=>{
    navigate(`/user/singleDJ/${dj._id}`)
  }
  useEffect(()=>{
    dispatch(getUserDJList(token,toast))
  },[dispatch,toast,token])
  let genre=["sp1","sp2","sp3","sp4","sp5","sp6","sp7","sp8","sp9","sp10","sp11","sp12",]
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
            djData.length>0 && djData?.map((el,i)=>{
              return(
                <Box color={"white"}  borderRadius={"15px"} key={i} p={"10px"} bgColor={i%2===0?"#63D471":"#B16668"} onClick={()=>handleSingleDJ(el)}>
                  <Flex gap={"10px"} direction={["column","column","column","column","row"]}>
                  <Image borderRadius={"15px"}w={"100px"} h={"100px"} src={el.profileImage} />
                  <Box textAlign={"left"} w={"full"}>
                    <Flex justifyContent={"space-between"} gap={"10px"}>
                      <Flex gap={"5px"} fontSize={"12px"}direction={["column","row","row","row","row"]}>
                        {genre.map((elem)=>{
                          
                          let name=elem;
                          if(el[name]!==""){
                            return(
                            <Text>{el[name]}</Text>
                          )
                          }
                          
                        })}
                      </Flex>
                      <Box fontSize={"20px"}>
                      <RxDotsVertical/></Box>
                    </Flex>
                    <Text fontWeight={"bold"} fontSize={"22px"}>{el.djName||"No Name"}</Text>
                    <Flex gap={"5px"} fontSize={"14px"}>
                      <Center>
                      <BsFillCalendarEventFill/></Center>
                      <Center>
                      <Text>Until</Text></Center>
                      <Center>
                      <Text>Apr 26, 2023</Text></Center>
                    </Flex>
                    <Flex justifyContent={"space-between"}>
                    <Flex gap={"10px"}direction={["column","row","row","row","row"]}>
                    <Center>
                    {
                        el.avgRating<=1?(
                          <Flex>
                            <AiFillStar/>
                          </Flex>
                        ):el.avgRating<=2?(
                          <Flex>
                            <AiFillStar/>
                            <AiFillStar/>
                          </Flex>
                        ):el.avgRating<=3?(
                          <Flex>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                          </Flex>
                        ):el.avgRating<=4?(
                          <Flex>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                          </Flex>
                        ):el.avgRating<=5?(
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
                      <Text fontSize={"13px"}>{el.avgRating} Rating</Text></Center>
                    </Flex>
                    <Box h={"30px"} p={"7px"} w={"30px"} borderRadius={"50%"} bgColor={"white"} color={i%2===0?"#63D471":"#B16668"}>
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

export default UserDjs;
