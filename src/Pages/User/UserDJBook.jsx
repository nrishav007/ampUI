import React from "react";
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
} from "@chakra-ui/react";
import bookSuccess from "../../Assets/bookSuccess.png";
import userBook from "../../Assets/userBook.png";
import { useSelector } from "react-redux";
const UserDJBook = () => {
  const theme = useSelector((store) => store.app.theme);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const submit = () => {
    onOpen();
    setTimeout(() => {
      // onClose();
    }, 2000);
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
          p={["", "", "0px 100px", "0px 100px"]}
          mt={"20px"}
          columns={[1, 1, 2, 2]}
          gap={["20px", "20px", "20px", "60px"]}
        >
          <Input
            border={"none"}
            bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
            borderRadius={"15px"}
            placeholder={"Event Title"}
          />
          <Input
            border={"none"}
            bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
            borderRadius={"15px"}
            placeholder={"Event Duration (hr)"}
          />
          <Select
            border={"none"}
            bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
            borderRadius={"15px"}
          >
            <option hidden>Time (9:30 PM)</option>
          </Select>
          <Input
            border={"none"}
            bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
            borderRadius={"15px"}
            placeholder={"Dates (20/02/2022)"}
          />
          <Select
            border={"none"}
            bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
            borderRadius={"15px"}
          >
            <option hidden>Location/ Venue (Brooklyn)</option>
          </Select>
          <Select
            border={"none"}
            bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
            borderRadius={"15px"}
          >
            <option hidden>List Equipments</option>
          </Select>
          <Select
            border={"none"}
            bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
            borderRadius={"15px"}
          >
            <option hidden>Additional Equipment</option>
          </Select>
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
