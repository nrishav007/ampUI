import React, { useEffect, useState } from "react";
import UserNav from "../../Components/UserNav";
import {
  Box,
  Center,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Modal,
  ModalOverlay,
  Th,
  Td,
  Tr,
  Table,
  Thead,
  Tbody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { FaConciergeBell } from "react-icons/fa";
import {
  AiFillStar,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import mount from "../../Assets/mount.jpg";
import { useNavigate, useParams } from "react-router-dom";
import {
  bookingDate,
  getUserBookingList,
  userSingleDJ,
} from "../../Redux/AppReducer/Action";
import axios from "axios";
const UserSingleDJ = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [rate, setRate] = useState([]);
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    dispatch(userSingleDJ(id, token));
    dispatch(getUserBookingList(token, toast));
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/api/booking/get-dj-rating/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setRate(res.data.data.rating);
      });
  }, []);
  const dj = useSelector((store) => store.app.singleDJ);
  const token = useSelector((store) => store.auth.token);
  const user = useSelector((store) => store.auth.user);
  const toast = useToast();
  const request = () => {
    navigate(`/user/djbook/${id}`);
  };
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
  const dt = new Date();
  const nowD = dt.getDate();
  const nowM = dt.getMonth() + 1;
  const nowY = dt.getFullYear();
  const fullCurrentDate = new Date(nowY, nowM - 1, nowD);
  const handleBookFromCalender = (day, month, year) => {
    const fullBookingDate = new Date(year, month - 1, day);
    if (fullBookingDate >= fullCurrentDate) {
      let newMon;
      if (month < 10) {
        newMon = `0${month}`;
      } else {
        newMon = `${month}`;
      }
      const book = `${day}/${newMon}/${year}`;
      dispatch(bookingDate(book));
      request();
    }
  };

  const book = useSelector((store) => store.app.userBook);
  const dat = new Date();
  const [currentMonth, setMonth] = useState(new Date().getMonth());
  const [currentYear, setYear] = useState(new Date().getFullYear());
  const cmonth = month[currentMonth];
  const year = currentYear;
  const handlePrevMonth = () => {
    setMonth((prevMonth) => {
      const newMonth = prevMonth === 0 ? 11 : prevMonth - 1;
      setYear((prevYear) => (newMonth === 11 ? prevYear - 1 : prevYear));
      return newMonth;
    });
  };

  const handleNextMonth = () => {
    setMonth((prevMonth) => {
      const newMonth = prevMonth === 11 ? 0 : prevMonth + 1;
      setYear((prevYear) => (newMonth === 0 ? prevYear + 1 : prevYear));
      return newMonth;
    });
  };

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekdays = daysOfWeek.map((day) => <Th key={day}>{day}</Th>);

  let calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(<Td key={`empty-${i}`} />);
  }
  for (let day = 1; day <= totalDays; day++) {
    let date = day;
    let month =
      currentMonth + 1 >= 10 ? currentMonth + 1 : `0${currentMonth + 1}`;
    let year = currentYear;
    let fullDate = `${date}/${month}/${year}`;
    const temp = book.filter((el) => el.date == fullDate);
    if (temp.length > 0) {
      const fullnewDate = new Date(currentYear, currentMonth, day);
      calendarDays.push(
        <Td key={day} style={{ padding: "0.5rem"}}>
          <Box
            w={"60px"}
            h={"40px"}
            backgroundImage={mount}
            backgroundSize={"cover"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            borderRadius={"10px"}
          >
            <Center pt="9px">{day}</Center>
          </Box>
        </Td>
      );
    } else {
      const fullnewDate = new Date(currentYear, currentMonth, day);
      calendarDays.push(
        <Td style={{ padding: "0.5rem"}}
          cursor={fullnewDate <= fullCurrentDate ? "not-allowed" : "pointer"}
          onClick={() =>
            handleBookFromCalender(day, currentMonth + 1, currentYear)
          }
          key={day}
        >
          <Box w={"60px"} 
            h={"40px"} bgColor={"gray.300"} borderRadius={"10px"} color={fullnewDate <= fullCurrentDate ? "gray" : null}p={"0px 20px"}>
            <Center pt="9px">{day}</Center>
          </Box>
        </Td>
      );
    }
  }

  const rows = [];
  let cells = calendarDays.slice();

  while (cells.length) {
    rows.push(<Tr key={rows.length}>{cells.splice(0, 7)}</Tr>);
  }
  let genre = [
    "sp1",
    "sp2",
    "sp3",
    "sp4",
    "sp5",
    "sp6",
    "sp7",
    "sp8",
    "sp9",
    "sp10",
    "sp11",
    "sp12",
  ];
  const [msg, setMsg] = useState("");
  const sendMessage = () => {
    let payload = {};
    payload.djId = id;
    payload.userId = user._id;
    payload.message = msg;
    payload.userType = "user";
    try {
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/api/message/create-message`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          setMsg("");
          toast({
            title: `Message Sent`,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          onClose();
        });
    } catch (err) {
      console.log(err);
      toast({
        title: err.response.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <UserNav>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          color={theme === "light" ? "black" : "white"}
          bgColor={theme === "light" ? "white" : "#0A0F1B"}
        >
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap={"5px"}>
              <Image h={"150px"} src={dj?.profileImage} />
              <Center>
                <Text fontSize={"20px"}>{dj?.djName}</Text>
              </Center>
            </Flex>
            <Textarea
              defaultValue={msg}
              onChange={(e) => setMsg(e.target.value)}
              mt={"20px"}
              placeholder="Write to dj"
              resize={"none"}
            />
            <Center>
              <Button
                mb={"20px"}
                onClick={sendMessage}
                mt={"20px"}
                variant={"unstyled"}
                bgColor={"#0086FF"}
                color={"white"}
                p={"0px 20px"}
                _hover={{}}
                borderRadius={"15px"}
              >
                Submit
              </Button>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
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
              backgroundImage={dj?.profileImage}
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
                cursor={"pointer"}
                onClick={onOpen}
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
                {dj?.djName}
              </Text>
              <Center>
                <Flex>
                  <Box
                    fontSize={"20px"}
                    color={dj.avgRating - 1 >= 0 ? "#FAAE57" : "#B9B9B9"}
                  >
                    <AiFillStar />
                  </Box>
                  <Box
                    fontSize={"20px"}
                    color={dj.avgRating - 2 >= 0 ? "#FAAE57" : "#B9B9B9"}
                  >
                    <AiFillStar />
                  </Box>
                  <Box
                    fontSize={"20px"}
                    color={dj.avgRating - 3 >= 0 ? "#FAAE57" : "#B9B9B9"}
                  >
                    <AiFillStar />
                  </Box>
                  <Box
                    fontSize={"20px"}
                    color={dj.avgRating - 4 >= 0 ? "#FAAE57" : "#B9B9B9"}
                  >
                    <AiFillStar />
                  </Box>
                  <Box
                    fontSize={"20px"}
                    color={dj.avgRating - 5 >= 0 ? "#FAAE57" : "#B9B9B9"}
                  >
                    <AiFillStar />
                  </Box>
                  <Text ml={"10px"} fontWeight={"500"}>
                    {dj?.avgRating?.toFixed(1)}
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
                {dj?.djBio}
              </Text>
            </Box>
            <Flex
              mt={"20px"}
              gap={"10px"}
              direction={["column", "row", "row", "row"]}
            >
              {genre.map((elem,i) => {
                let name = elem;
                if (dj[name] !== "") {
                  return (
                    <Box
                    key={i}
                      bgColor={"#63D471"}
                      color={"white"}
                      p={"5px 10px"}
                      borderRadius={"15px"}
                    >
                      {dj[name]}
                    </Box>
                  );
                }
              })}
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
                <Flex>
                  <Button variant={"unstyled"} onClick={handlePrevMonth}>
                    {" "}
                    <Center>
                      <AiOutlineArrowLeft />
                    </Center>{" "}
                  </Button>
                  <Center>
                    <Text fontSize={"20px"} fontWeight={"500"}>
                      {cmonth}, {year}
                    </Text>
                  </Center>
                  <Button variant={"unstyled"} onClick={handleNextMonth}>
                    <Center>
                      <AiOutlineArrowRight />
                    </Center>{" "}
                  </Button>
                </Flex>
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
                <Box width="100%" maxWidth="600px" margin="0 auto">
                  <Table variant={"unstyled"} style={{ borderCollapse: "collapse" }}>
                    <Thead>
                      <Tr>{weekdays}</Tr>
                    </Thead>
                    <Tbody>{rows}</Tbody>
                  </Table>
                </Box>
              </Box>
            </Box>
            <Box>
              <Text
                fontSize={"30px"}
                color={theme === "light" ? "black" : "white"}
              >
                Ratings
              </Text>
              {rate.map(({ feedback, rating, userId },i) => {
                return (
                  <Box key={i} mt={"10px"} mb={"20px"}>
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
                        <Text>{feedback}</Text>
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
