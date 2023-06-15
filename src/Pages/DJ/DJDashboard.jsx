import { Box, Center, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import dj from "../../Assets/dj.jpg";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  LineChart,
  Line,
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
} from "recharts";
import axios from "axios";

const DJDashboard = () => {
  let user = useSelector((store) => store.auth.user);
  let token = useSelector((store) => store.auth.token);
  const [grap, setGrap] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/api/booking/get-dj-graph/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setGrap(res.data.data.djBooking);
      });
  }, []);
  let orders = [
    {
      name: "NYC",
      price: 920,
    },
    {
      name: "Belgium",
      price: 820,
    },
    {
      name: "Iran",
      price: 720,
    },
    {
      name: "Bangladesh",
      price: 620,
    },
    {
      name: "India",
      price: 520,
    },
  ];
  const bardata = [
    {
      name: "Page A",
      value: 0,
    },
    {
      name: "Page B",
      value: 0,
    },
    {
      name: "Page C",
      value: 0,
    },
    {
      name: "Page D",
      value: 0,
    },
    {
      name: "Page E",
      value: 0
    },
    {
      name: "Page F",
      value: 0
    },
    {
      name: "Page G",
      value: 0,
    },
  ];
  const theme = useSelector((store) => store.app.theme);
  const addCommas = (nStr) => {
    nStr += "";
    let x = nStr.split(".");
    let x1 = x[0];
    let x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
  };
  const data = [
    { name: "Male", value: 55, fill: "#7673FF" },
    { name: "Female", value: 45, fill: "#FAAE57" },
  ];
  const linedata = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const data01 = [
    {
      name: "Group A",
      value: 75,
      fill: "#FAAE57",
    },
    {
      name: "Group B",
      value: 25,
      fill: theme === "light" ? "#B9B9B9" : "white",
    },
  ];
  const data02 = [
    {
      name: "Group A",
      value: 75,
      fill: theme === "light" ? "#B9B9B9" : "white",
    },
    {
      name: "Group B",
      value: 25,

      fill: "#7673FF",
    },
  ];
  return (
    <Nav>
      <Box pb={"20px"} pl={"57px"} pr={"42px"}>
        <SimpleGrid columns={[1, 2, 3]} pt={"20px"} gap={"30px"}>
          <Box
            h={"152px"}
            bgColor={theme === "light" ? "#7673FF" : "#181D29"}
            borderRadius={"15px"}
          >
            <Center>
              <Text
                pt={"23px"}
                color={"white"}
                fontStyle={"normal"}
                fontWeight={"600"}
                fontSize={["40px", "40px", "40px", "60px"]}
                lineHeight={"60px"}
              >
                250
              </Text>
            </Center>
            <Center>
              <Text color={"white"} mt={"15px"}>
                Total Gigs
              </Text>
            </Center>
          </Box>
          <Box
            h={"152px"}
            bgColor={theme === "light" ? "#8744E1" : "#181D29"}
            borderRadius={"15px"}
          >
            <Center>
              <Text
                pt={"23px"}
                color={"white"}
                fontStyle={"normal"}
                fontWeight={"600"}
                fontSize={["40px", "40px", "40px", "60px"]}
                lineHeight={"60px"}
              >
                $ {addCommas(1623)}
              </Text>
            </Center>
            <Center>
              <Text color={"white"} mt={"15px"}>
                Total Earning
              </Text>
            </Center>
          </Box>
          <Box
            h={"152px"}
            bgColor={theme === "light" ? "#FAAE57" : "#181D29"}
            borderRadius={"15px"}
          >
            <Center>
              <Text
                pt={"23px"}
                color={"white"}
                fontStyle={"normal"}
                fontWeight={"600"}
                fontSize={["40px", "40px", "40px", "60px"]}
                lineHeight={"60px"}
              >
                $ {addCommas(580)}
              </Text>
            </Center>
            <Center>
              <Text color={"white"} mt={"15px"}>
                Total Cost
              </Text>
            </Center>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={[1, 2, 3]} pt={"20px"} gap={"30px"}>
          <Box
            bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
            borderRadius={"15px"}
            p={"0px 15px"}
          >
            <Center>
              <Text
                pt={"23px"}
                color={theme === "light" ? "#3A3A3A" : "white"}
                fontStyle={"normal"}
                fontWeight={"600"}
                fontSize={["14px", "18px", "20px", "24px"]}
                lineHeight={"60px"}
              >
                Clients
              </Text>
            </Center>
            <Box>
              <ResponsiveContainer width="100%" height={154}>
                <PieChart>
                  <Pie
                    data={data}
                    innerRadius="60%"
                    outerRadius="100%"
                    dataKey="value"
                  ></Pie>
                </PieChart>
              </ResponsiveContainer>
            </Box>
            <Box mt={"20px"} ml={"10px"} mr={"10px"}>
              <Flex justifyContent={"space-between"} fontWeight={"500"}>
                <Flex gap={"15px"}>
                  <Box
                    w={"26px"}
                    h={"26px"}
                    bgColor={"#7673FF"}
                    borderRadius={"50%"}
                  ></Box>
                  <Text color={theme === "light" ? "#3A3A3A" : "white"}>
                    Male
                  </Text>
                </Flex>
                <Text color={theme === "light" ? "#3A3A3A" : "white"}>55%</Text>
              </Flex>
            </Box>
            <Box ml={"10px"} mr={"10px"} mt={"20px"} pb={"20px"}>
              <Flex justifyContent={"space-between"} fontWeight={"500"}>
                <Flex gap={"15px"}>
                  <Box
                    w={"26px"}
                    h={"26px"}
                    bgColor={"#FAAE57"}
                    borderRadius={"50%"}
                  ></Box>
                  <Text color={theme === "light" ? "#3A3A3A" : "white"}>
                    Female
                  </Text>
                </Flex>
                <Text color={theme === "light" ? "#3A3A3A" : "white"}>45%</Text>
              </Flex>
            </Box>
          </Box>
          <Box
            bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
            borderRadius={"15px"}
          >
            <Center>
              <Text
                pt={"23px"}
                color={theme === "light" ? "#3A3A3A" : "white"}
                fontStyle={"normal"}
                fontWeight={"600"}
                fontSize={["14px", "18px", "20px", "24px"]}
                lineHeight={"60px"}
              >
                Countries
              </Text>
            </Center>
            <ResponsiveContainer width="100%" height={154}>
              <BarChart width={150} height={40} data={grap?.length>0?grap:bardata}>
              <Tooltip />
                <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} label />
              </BarChart>
            </ResponsiveContainer>
            <Box
            mt={"20px"}
              p={"0px 20px"}
              fontWeight={"500"}
              fontSize={["10px", "14px", "15px", "20px"]}
            >
              {orders.map(({ name, price }) => {
                return (
                  <Flex
                    justifyContent={"space-between"}
                    color={theme === "light" ? "#3A3A3A" : "white"}
                  >
                    <Text>{name}</Text>
                    <Text color={"#0086FF"}>${price}</Text>
                  </Flex>
                );
              })}
            </Box>
          </Box>
          <Box
            bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
            borderRadius={"15px"}
          >
            <Center>
              <Text
                pt={"23px"}
                color={theme === "light" ? "#3A3A3A" : "white"}
                fontStyle={"normal"}
                fontWeight={"600"}
                fontSize={["14px", "18px", "20px", "24px"]}
                lineHeight={"60px"}
              >
                Expenses
              </Text>
            </Center>
            <Center>
              <ResponsiveContainer width="100%" height={154}>
                <LineChart
                  data={linedata}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <Line
                    dot={false}
                    type="natural"
                    dataKey="pv"
                    stroke="#FAAE57"
                    strokeWidth={3}
                  />
                  <Line
                    dot={false}
                    type="monotone"
                    dataKey="uv"
                    stroke="#7673FF"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Center>
            <Box>
              <Flex
                gap={"30px"}
                direction={["row", "column", "column", "column", "row"]}
              >
                <PieChart width={150} height={100}>
                  <Pie
                    data={data01}
                    innerRadius={10}
                    outerRadius={30}
                    dataKey="value"
                    label
                  ></Pie>
                </PieChart>
                <Center>
                  <Flex
                    direction={"column"}
                    color={theme === "light" ? "#3A3A3A" : "white"}
                    gap={"7px"}
                    textAlign={"left"}
                  >
                    <Text>Transportation</Text>
                    <Text>$265</Text>
                  </Flex>
                </Center>
              </Flex>
            </Box>
            <Box>
              <Flex
                gap={"30px"}
                direction={["row", "column", "column", "column", "row"]}
              >
                <PieChart width={150} height={100}>
                  <Pie
                    data={data02}
                    innerRadius={10}
                    outerRadius={30}
                    dataKey="value"
                    label
                  ></Pie>
                </PieChart>
                <Center>
                  <Flex
                    direction={"column"}
                    color={theme === "light" ? "#3A3A3A" : "white"}
                    gap={"7px"}
                    textAlign={"left"}
                  >
                    <Text>Others</Text>
                    <Text>$300</Text>
                  </Flex>
                </Center>
              </Flex>
            </Box>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={[1, 2, 3]} pt={"20px"} gap={"30px"}>
          <Box
            boxShadow={"0px 20px 50px rgba(0, 0, 0, 0.1)"}
            bgColor={"#FAAE57"}
            color={"white"}
            borderRadius={"15px"}
            p={"10px"}
          >
            <Flex
              gap={"15px"}
              direction={[
                "column",
                "column",
                "column",
                "column",
                "column",
                "row",
                "row",
                "row",
              ]}
            >
              <Box>
                <Image
                  borderRadius={"15px"}
                  h={[
                    "100px",
                    "150px",
                    "170px",
                    "190px",
                    "200px",
                    "140px",
                    "140px",
                    "140px",
                  ]}
                  src={dj}
                />
              </Box>
              <Center>
                <Flex
                  direction={"column"}
                  textAlign={"center"}
                  gap={"10px"}
                  fontFamily={"poppins"}
                  fontWeight={"600"}
                  fontSize={["15px", "15px", "20px", "28px"]}
                  lineHeight={"42px"}
                >
                  <Box>
                    <Text>Upcoming Events</Text>
                  </Box>
                  <Box>
                    <Text>Triator Band</Text>
                  </Box>
                </Flex>
              </Center>
            </Flex>
          </Box>
          <Box
            boxShadow={"0px 20px 50px rgba(0, 0, 0, 0.1)"}
            bgColor={"#38C96A"}
            color={"white"}
            borderRadius={"15px"}
            p={"10px"}
          >
            <Flex
              gap={"15px"}
              direction={[
                "column",
                "column",
                "column",
                "column",
                "column",
                "row",
                "row",
                "row",
              ]}
            >
              <Box>
                <Image
                  borderRadius={"15px"}
                  h={[
                    "100px",
                    "150px",
                    "170px",
                    "190px",
                    "200px",
                    "140px",
                    "140px",
                    "140px",
                  ]}
                  src={dj}
                />
              </Box>
              <Center>
                <Flex
                  direction={"column"}
                  textAlign={"center"}
                  gap={"10px"}
                  fontFamily={"poppins"}
                  fontWeight={"600"}
                  fontSize={["15px", "15px", "20px", "28px"]}
                  lineHeight={"42px"}
                >
                  <Box>
                    <Text>Reviews / Rating</Text>
                  </Box>
                  <Center>
                    <Flex gap={"5px"}>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </Flex>
                  </Center>
                </Flex>
              </Center>
            </Flex>
          </Box>
          <Box
            boxShadow={"0px 20px 50px rgba(0, 0, 0, 0.1)"}
            bgColor={"#7673FE"}
            color={"white"}
            borderRadius={"15px"}
            p={"10px"}
          >
            <Flex
              gap={"15px"}
              direction={[
                "column",
                "column",
                "column",
                "column",
                "column",
                "row",
                "row",
                "row",
              ]}
            >
              <Box>
                <Image
                  borderRadius={"15px"}
                  h={[
                    "100px",
                    "150px",
                    "170px",
                    "190px",
                    "200px",
                    "140px",
                    "140px",
                    "140px",
                  ]}
                  src={dj}
                />
              </Box>
              <Center>
                <Flex
                  direction={"column"}
                  textAlign={"center"}
                  gap={"10px"}
                  fontFamily={"poppins"}
                  fontWeight={"600"}
                  fontSize={["15px", "15px", "20px", "28px"]}
                  lineHeight={"42px"}
                >
                  <Box>
                    <Text>Reviews / Rating</Text>
                  </Box>
                  <Center>
                    <Flex gap={"5px"}>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </Flex>
                  </Center>
                </Flex>
              </Center>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </Nav>
  );
};

export default DJDashboard;
