import React, { useState } from "react";
import UserNav from "../../Components/UserNav";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  Center,
  Image,
  Input,
  Select,
  SimpleGrid,
  useDisclosure,
  Text,
  useToast,
} from "@chakra-ui/react";
import bookSuccess from "../../Assets/bookSuccess.png";
import userBook from "../../Assets/userBook.png";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const UserDJBook = () => {
  const theme = useSelector((store) => store.app.theme);
  const token = useSelector((store) => store.auth.token);
  const navigate = useNavigate();
  const toast = useToast();
  const { id } = useParams();
  const date = useSelector((store) => store.app.date);
  const [bookData, setBookData] = useState({
    djId: id,
    date: date || "",
    time: "",
    event: "",
    eventDuration: "",
    location: "",
    listEquipments: "",
    additionalEquipments: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    const temp = { ...bookData };
    temp[name] = value;
    setBookData(temp);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const submit = () => {
    try {
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/api/booking/create-booking`,
          bookData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          onOpen();
          setTimeout(() => {
            onClose();
            toast({
              title: "Booking Successful",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
            navigate(`/user/singleDJ/${id}`);
          }, 2000);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserNav>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Center>
              <Box
                mt={"50px"}
                p={"40px"}
                borderRadius={"50%"}
                bgColor={"#0086FF"}
              >
                <Image src={bookSuccess} />
              </Box>
            </Center>
            <Center>
              <Text mt={"10px"} fontSize={"24px"} fontWeight={"600"}>
                Booking Confirmed
              </Text>
            </Center>
            <Center>
              <Button
                mt={"50px"}
                mb={"40px"}
                variant={"unstyled"}
                p={"0px 50px"}
                color={"white"}
                bgColor={"#0086FF"}
                onClick={onClose}
              >
                Done
              </Button>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box
        minH={"750px"}
        pl={"20px"}
        color={theme === "light" ? "black" : "#B9B9B9"}
      >
        <Image src={userBook} />
        <SimpleGrid
          p={["", "", "0px 100px", "0px 150px"]}
          mt={"20px"}
          columns={[1, 1, 2, 2]}
          gap={["20px", "20px", "20px", "60px"]}
        >
          <Input
            onChange={(e) => handleInput(e)}
            name="event"
            border={"none"}
            h={["30px", "30px", "30px", "60px"]}
            fontSize={["14px", "16px", "18px", "20px"]}
            bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
            borderRadius={"15px"}
            placeholder={"Event Title"}
          />
          <Input
            h={["30px", "30px", "30px", "60px"]}
            fontSize={["14px", "16px", "18px", "20px"]}
            onChange={(e) => handleInput(e)}
            name="eventDuration"
            border={"none"}
            bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
            borderRadius={"15px"}
            placeholder={"Event Duration (hr)"}
          />
          <Input
            h={["30px", "30px", "30px", "60px"]}
            fontSize={["14px", "16px", "18px", "20px"]}
            onChange={(e) => handleInput(e)}
            name="time"
            border={"none"}
            bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
            borderRadius={"15px"}
            placeholder="Time (9:30 PM)"
          ></Input>
          <Input
            h={["30px", "30px", "30px", "60px"]}
            fontSize={["14px", "16px", "18px", "20px"]}
            onChange={(e) => handleInput(e)}
            name="date"
            defaultValue={bookData.date}
            border={"none"}
            bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
            borderRadius={"15px"}
            placeholder={"Dates (20/02/2022)"}
          />
          <Input
            h={["30px", "30px", "30px", "60px"]}
            fontSize={["14px", "16px", "18px", "20px"]}
            onChange={(e) => handleInput(e)}
            name="location"
            border={"none"}
            bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
            borderRadius={"15px"}
            placeholder="Location/ Venue (Brooklyn)"
          ></Input>
          <Input
            h={["30px", "30px", "30px", "60px"]}
            fontSize={["14px", "16px", "18px", "20px"]}
            onChange={(e) => handleInput(e)}
            name="listEquipments"
            border={"none"}
            bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
            borderRadius={"15px"}
            placeholder="List Equipments"
          ></Input>
          <Input
            h={["30px", "30px", "30px", "60px"]}
            fontSize={["14px", "16px", "18px", "20px"]}
            onChange={(e) => handleInput(e)}
            name="additionalEquipments"
            border={"none"}
            bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
            borderRadius={"15px"}
            placeholder="Additional Equipment"
          ></Input>
        </SimpleGrid>
        <Center mt={"30px"}>
          <Button
            variant={"none"}
            bgColor={"#0086FF"}
            color={"white"}
            p={"0px 50px"}
            onClick={submit}
          >
            Submit
          </Button>
        </Center>
      </Box>
    </UserNav>
  );
};

export default UserDJBook;
