import React, { useEffect } from 'react'
import Nav from "../../Components/Nav"; 
import { Box, Center, Flex, Image, Text, useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getDJMessageList } from '../../Redux/AppReducer/Action';
const DJMessage = () => {
  const dispatch=useDispatch();
  const user=useSelector((store)=>store.auth.user);
  const token=useSelector((store)=>store.auth.token);
  const dms=useSelector((store)=>store.app.djDMs);
  const theme=useSelector((store)=>store.app.theme);
  const toast=useToast();
  useEffect(()=>{
    dispatch(getDJMessageList({id:user._id},toast,token));
    setInterval(()=>{
      dispatch(getDJMessageList({id:user._id},toast,token));
    },100000)
  },[])
  return (
    <Nav>
        <Flex>
          <Box w={"30%"} h={"750px"} borderRight={"1px solid #787878"}p={"20px"}>
            <Flex>
              {
                dms.map((el)=>{
                  let data=el._id[0];
                  return(
                    <Flex gap={"5px"}>
                      <Image src={data.profileImage} />
                      <Center>
                        <Text color={theme==="light"?"black":"white"}>{data.email}</Text></Center>
                    </Flex>
                  )
                })
              }
            </Flex>
          </Box>
          <Box></Box>
        </Flex>
    </Nav>
  )
}

export default DJMessage