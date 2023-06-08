import React, { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import banner from "../../Assets/banner.jpg";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import axios from "axios";
const DJBook = () => {
  const [status, setStatus] = useState("all");
  const token = useSelector((store) => store.auth.token);
  const [filterData, setFilterData] = useState([]);
  const theme = useSelector((store) => store.app.theme);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/booking/accept-booking`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData([...data, ...res.data.data.booking]);
        axios
          .get(
            `${process.env.REACT_APP_BACKEND_URL}/api/booking/pending-decline-booking`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            setData([...data, ...res.data.data.booking]);
          });
      });
  }, []);

  useEffect(() => {
    if (status !== "all" && data !== "undefined") {
      let tempData = data?.filter((el) => el.status === status);
      setFilterData(tempData);
    } else {
      setFilterData(data);
    }
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

  return (
    <Nav>
      <Box mt={"30px"}>
        <Flex gap={"30px"} pl={"74px"}>
          <Box
            bgColor={status === "all" ? "#0086FF" : "#F6F6F6"}
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
              fontSize={"20px"}
              lineHeight={"30px"}
            >
              All
            </Text>
          </Box>
          <Box
            bgColor={status === "pending" ? "#0086FF" : "#F6F6F6"}
            color={status === "pending" ? "white" : "#787878"}
            p={"10px 20px"}
            borderRadius={"15px"}
            onClick={() => setStatus("pending")}
            cursor={"pointer"}
          >
            <Text
              cursor={"pointer"}
              fontFamily={"Poppins"}
              fontWeight={"500"}
              fontStyle={"normal"}
              fontSize={"20px"}
              lineHeight={"30px"}
            >
              Requested
            </Text>
          </Box>
          <Box
            bgColor={status === "approved" ? "#0086FF" : "#F6F6F6"}
            color={status === "approved" ? "white" : "#787878"}
            p={"10px 20px"}
            borderRadius={"15px"}
            onClick={() => setStatus("approved")}
            cursor={"pointer"}
          >
            <Text
              cursor={"pointer"}
              fontFamily={"Poppins"}
              fontWeight={"500"}
              fontStyle={"normal"}
              fontSize={"20px"}
              lineHeight={"30px"}
            >
              Approved
            </Text>
          </Box>
        </Flex>
        <Box
          ml={"54px"}
          mt={"30px"}
          mb={"30px"}
          border={"0.5px solid #787878"}
        ></Box>
        {data?.length <= 0 ? (
          <Text>No Data available</Text>
        ) : (
          <Box ml={"54px"}>
            <Flex
              justifyContent={"space-between"}
              mr={"40px"}
              bgColor={"#E0E0E0"}
              p={"10px"}
            >
              <Box>
                <Text>Profile</Text>
              </Box>
              <Box>
                <Text>Name</Text>
              </Box>
              <Box>
                <Text>Location</Text>
              </Box>
              <Box>
                <Text>Date</Text>
              </Box>
              <Box>
                <Text>Genre</Text>
              </Box>
              <Box>
                <Text>Status</Text>
              </Box>
            </Flex>
            {filterData?.length > 0 &&
              filterData?.map((el) => {
                return (
                  <Box mt={"30px"}>
                    <Flex
                      justifyContent={"space-between"}
                      mr={"40px"}
                      ml={"20px"}
                      color={theme === "light" ? "#3A3A3A" : "white"}
                    >
                      <Center>
                        <Image
                          borderRadius={"15px"}
                          w={"111px"}
                          h={"94px"}
                          src={banner}
                        />
                      </Center>
                      <Text>{el.name}</Text>
                      <Text>{el.location}</Text>
                      <Text>{el.date}</Text>
                      <Text>{el.genre}</Text>
                      <Center mt={"-70px"}>
                        <Text
                          p={"10px"}
                          borderRadius={"15px"}
                          color={el.status === "decline" ? "black" : "white"}
                          bgColor={
                            el.status === "pending"
                              ? "#FF3D14B2"
                              : el.status === "approved"
                              ? "#63D471"
                              : "#9A9898"
                          }
                        >
                          {toPascalCase(el.status)}
                        </Text>
                      </Center>
                    </Flex>
                    <Box
                      mt={"30px"}
                      mb={"30px"}
                      border={"0.5px solid #787878"}
                    ></Box>
                  </Box>
                );
              })}
          </Box>
        )}
      </Box>
    </Nav>
  );
};

export default DJBook;
