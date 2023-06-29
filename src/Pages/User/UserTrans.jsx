import React from "react";
import UserNav from "../../Components/UserNav";
import { CgSandClock } from 'react-icons/cg';
import { HiReceiptRefund } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import {
  Box, Center, Flex, SimpleGrid, Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const UserTrans = () => {
    const theme = useSelector((store) => store.app.theme);
  const trans = [
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "pending",
    },
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "delivered",
    },
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "refund",
    },
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "pending",
    },
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "pending",
    },
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "pending",
    },
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "pending",
    },
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "pending",
    },
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "pending",
    },
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "pending",
    },
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "pending",
    },
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "pending",
    },
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "pending",
    },
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "pending",
    },
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "pending",
    },
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "pending",
    },
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "pending",
    },
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "pending",
    },
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "pending",
    },
    {
      event: "RPJ545",
      djname: "DJ Khalid",
      date: "12 Jun 2023",
      status: "pending",
    },
  ];
  return (
    <UserNav>
      <Box minH={"800px"} pl={"20px"}>
        <Text textAlign={"left"} fontSize={"30px"} color={theme==="light"?"black":"white"}>Transactions</Text>
        <Box m={"30px 0px"} borderBottom={"1px solid #787878"}></Box>
        <SimpleGrid p={"10px"} columns={[1,2,2,4]} gap={["10px","10px","10px","0px"]} bgColor={theme==="light"?"#E0E0E0":"#181D29"} color={"#787878"}>
            <Box textAlign={["center","center","center","left"]}>Event</Box>
            <Box>DJ Name</Box>
            <Box>Date</Box>
            <Box>Status</Box>
        </SimpleGrid>
        {
            trans.map((el,i)=>{
                return(
                    <SimpleGrid key={i} p={"10px 0px"}gap={["10px","10px","10px","0px"]} columns={[1,2,2,4]} color={theme==="light"?"black":"white"} borderBottom={"1px solid #787878"}>
                        <Box textAlign={["center","center","center","left"]} ml={"10px"}>{el.event}</Box>
                        <Box>{el.djname}</Box>
                        <Box>{el.date}</Box>
                        <Center>
                        <Flex gap={"5px"} w={"130px"} borderRadius={"15px"} p={"2px 20px"} bgColor={el.status==="pending"?"#9A4A4D":el.status==="delivered"?"#63D471":"#FB9847"}>
                            <Center>
                            {
                                el.status==="pending"?<CgSandClock />:el.status==="delivered"?<TiTick/>:<HiReceiptRefund/>
                            }</Center>
                            <Center>
                            <Text color={"white"}>{el.status}</Text></Center>
                        </Flex>
                        </Center>
                    </SimpleGrid>
                )
            })
        }
      </Box>
    </UserNav>
  );
};

export default UserTrans;
