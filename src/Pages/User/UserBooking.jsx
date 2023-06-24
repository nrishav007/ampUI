import React, { useEffect, useState } from "react";
import banner from "../../Assets/banner.jpg";
import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  useToast,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getUserBookingList } from "../../Redux/AppReducer/Action";
import UserNav from "../../Components/UserNav";
const UserBooking = () => {
  const [status, setStatus] = useState("all");
  const toast = useToast();
  const token = useSelector((store) => store.auth.token);
  const [filterData, setFilterData] = useState([]);
  const theme = useSelector((store) => store.app.theme);
  const [rateDJ,setRateDJ]=useState({});
  const book = useSelector((store) => store.app.userBook);
  const dispatch = useDispatch();
  const filterBooking = () => {
    if (status !== "all") {
      let tempData;
      if (status === "Accepted") {
        tempData = book?.filter(
          (el) => el.status === status || el.status === "Decline"
        );
      } else {
        tempData = book?.filter((el) => el.status === status);
      }
      setFilterData(tempData);
    } else {
      setFilterData(book);
    }
  };
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    dispatch(getUserBookingList(token, toast));
    filterBooking();
  }, [status]);

  useEffect(() => {
    filterBooking();
  }, [status]);
  const toPascalCase = (string) => {
    return `${string}`
      .toLowerCase()
      .replace(new RegExp(/[-_]+/, "g"), " ")
      .replace(new RegExp(/[^\w\s]/, "g"), "")
      .replace(
        new RegExp(/\s+(.)(\w*)/, "g"),
        ($1, $2, $3) => `${$2.toUpperCase() + $3}`
      )
      .replace(new RegExp(/\w/), (s) => s.toUpperCase());
  };
const handleDJRate=(dj)=>{
  setRateDJ(dj);
  console.log(dj)
  onOpen();
}
  return (
    <UserNav>
      <Box mt={"30px"}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Rate Me</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Image w={"100%"} borderRadius={"15px"} h={"200px"} src={rateDJ?.djId?.profileImage} />
           <Center>{rateDJ?.djId?.djName}</Center>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        <Flex
          gap={"30px"}
          direction={["column", "column", "row", "row"]}
          pl={["10px", "10px", "10px", "74px"]}
          fontSize={["14px", "16px", "18px", "20px"]}
        >
          <Box
            bgColor={
              status === "all"
                ? "#0086FF"
                : theme === "light"
                ? "white"
                : "#0A0F1B"
            }
            color={status === "all" ? "white" : "#787878"}
            p={"10px 20px"}
            borderRadius={"15px"}
            onClick={() => setStatus("all")}
            cursor={"pointer"}
          >
            <Text
              cursor={"pointer"}
              fontFamily={"Poppins"}
              fontWeight={"500"}
              fontStyle={"normal"}
              lineHeight={"30px"}
            >
              All
            </Text>
          </Box>
          <Box
            bgColor={
              status === "Pending"
                ? "#0086FF"
                : theme === "light"
                ? "white"
                : "#0A0F1B"
            }
            color={status === "Pending" ? "white" : "#787878"}
            p={"10px 20px"}
            borderRadius={"15px"}
            onClick={() => setStatus("Pending")}
            cursor={"pointer"}
          >
            <Text
              cursor={"pointer"}
              fontFamily={"Poppins"}
              fontWeight={"500"}
              fontStyle={"normal"}
              lineHeight={"30px"}
            >
              Requested
            </Text>
          </Box>
          <Box
            bgColor={
              status === "Accepted"
                ? "#0086FF"
                : theme === "light"
                ? "white"
                : "#0A0F1B"
            }
            color={status === "Accepted" ? "white" : "#787878"}
            p={"10px 20px"}
            borderRadius={"15px"}
            onClick={() => setStatus("Accepted")}
            cursor={"pointer"}
          >
            <Text
              cursor={"pointer"}
              fontFamily={"Poppins"}
              fontWeight={"500"}
              fontStyle={"normal"}
              lineHeight={"30px"}
            >
              Approved
            </Text>
          </Box>
        </Flex>
        <Box
          ml={["10px", "10px", "10px", "54px"]}
          mt={"30px"}
          mb={"30px"}
          border={"0.5px solid #787878"}
        ></Box>
        {book?.length <= 0 ? (
          <Box>
            <Text>No Data available</Text>
          </Box>
        ) : (
          <Box ml={["10px", "10px", "10px", "54px"]}>
            <TableContainer>
              <Table
                variant={"unstyled"}
                color={theme === "light" ? "#3A3A3A" : "#FFFFFF"}
              >
                <Thead bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}>
                  <Tr>
                    <Th>Profile</Th>
                    <Th>Event</Th>
                    <Th>Location</Th>
                    <Th>Date</Th>
                    <Th>Time</Th>
                    {status !== "Pending" ? (
                      <Th>
                        <Center>Status</Center>
                      </Th>
                    ) : null}
                    {status === "all" ? null : status === "Pending" ? (
                      <Th>
                        <Center>View Map</Center>
                      </Th>
                    ) : (
                      <Th>
                        <Center>Rating</Center>
                      </Th>
                    )}
                  </Tr>
                </Thead>
                <Tbody>
                  {filterData?.length > 0 &&
                    filterData?.map((el) => {
                      return (
                        <Tr mt={"30px"} borderBottom={"0.5px solid #787878"}>
                          <Td>
                            <Image
                              borderRadius={"15px"}
                              h={"50px"}
                              src={el.djId.profileImage}
                            />
                          </Td>
                          <Td>{el.event}</Td>
                          <Td>{el.location}</Td>
                          <Td>{el.date}</Td>
                          <Td>{el.time}</Td>
                          {status !== "Pending" ? (
                            <Td>
                              <Center>
                                <Text
                                  p={"5px 20px"}
                                  borderRadius={"15px"}
                                  color={
                                    el.status === "decline" ? "black" : "white"
                                  }
                                  bgColor={
                                    el.status === "Pending"
                                      ? "#FF3D14B2"
                                      : el.status === "Accepted"
                                      ? "#63D471"
                                      : "#9A9898"
                                  }
                                >
                                  {toPascalCase(el.status)}
                                </Text>
                              </Center>
                            </Td>
                          ) : null}
                          {status === "all" ? null : status === "Pending" ? (
                      <Td>
                        <Center fontWeight={"600"} bgColor={"#0086FF"} p={"10px"} borderRadius={"15px"} fontSize={"16px"} color={"white"}>See Here</Center>
                      </Td>
                    ) : (
                      <Td>
                        <Center fontWeight={"600"} bgColor={"#0086FF"} p={"10px"} borderRadius={"15px"} fontSize={"16px"} color={"white"} onClick={()=>handleDJRate(el)}>Rate DJ</Center>
                      </Td>
                    )}
                        </Tr>
                      );
                    })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Box>
    </UserNav>
  );
};

export default UserBooking;
