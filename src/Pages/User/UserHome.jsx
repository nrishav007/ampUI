import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Image,
  Input,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import UserNav from "../../Components/UserNav";
import profile from "../../Assets/profile.png";
import post1 from "../../Assets/post1.png";
import post2 from "../../Assets/post2.png";
import post3 from "../../Assets/post3.png";
import { AiFillHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { ImImages } from "react-icons/im";
import {
  BsThreeDots,
  BsSearch,
  BsFillPinFill,
  BsShareFill,
} from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { CgSmileMouthOpen } from "react-icons/cg";
const UserHome = () => {
  const djEvennts = [
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
  ];
  const dj = [
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "John Doe",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
  ];
  const theme = useSelector((store) => store.app.theme);
  return (
    <UserNav>
      <Box>
        <Flex
          direction={["column", "column", "column", "row"]}
          ml={["10px", "10px", "10px", "30px", "30px"]}
          gap={"10px"}
          color={theme === "light" ? "black" : "white"}
          textAlign={"left"}
        >
          <Box
            borderRadius={"15px"}
            w={["100%", "100%", "100%", "50%", "50%"]}
            p={"10px"}
          >
            <Flex
              justifyContent={"space-between"}
              direction={["column", "column", "column", "row"]}
            >
              <Flex
                gap={"10px"}
                borderRadius={"15px"}
                p={"10px"}
                bgColor={theme === "light" ? "#F6F6F6" : "#111823"}
              >
                <Center>
                  <BsSearch />
                </Center>
                <Input
                  placeholder="Search"
                  variant={"unstyled"}
                  border={"none"}
                />
              </Flex>
              <Flex gap={"5px"} fontSize={"14px"}>
                <Center>
                  <Text>Sort by</Text>
                </Center>
                <Center>
                  <Select
                    fontSize={"16px"}
                    fontWeight={"bold"}
                    color={"#0086FF"}
                    variant={"unstyled"}
                  >
                    <option>Newest</option>
                  </Select>
                </Center>
              </Flex>
            </Flex>
            <Box mt={"30px"}>
              {dj.map((el,i) => {
                return (
                  <Box key={i}
                    mb={"30px"}
                    p={"10px"}
                    borderRadius={"15px"}
                    bgColor={theme === "light" ? "#F6F6F6" : "#111823"}
                  >
                    <Flex justifyContent={"space-between"}>
                      <Box>
                        <Flex gap={"10px"}>
                          <Image h={"50px"} src={profile} />
                          <Flex direction={"column"}>
                            <Text>{el.name}</Text>
                            <Text fontSize={"12px"}>20 March at 4:25 PM</Text>
                          </Flex>
                        </Flex>
                      </Box>
                      <Box>
                        <Center>
                          <BsThreeDots />
                        </Center>
                      </Box>
                    </Flex>
                    <Text mt={"30px"} fontSize={"14px"}>
                      {el.description}
                    </Text>
                    <Flex
                      gap={"10px"}
                      mt={"20px"}
                      direction={["column", "column", "column", "row"]}
                    >
                      <Image h={"220px"} src={post1} />
                      <Flex gap={"10px"} direction={"column"}>
                        <Image h={"100px"} src={post2} />
                        <Image h={"100px"} src={post3} />
                      </Flex>
                    </Flex>
                    <SimpleGrid
                      columns={[1, 2, 3, 4]}
                      gap={"5px"}
                      m={"0px 20px"}
                      color={"#B9B9B9"}
                      mt={"20px"}
                      justifyContent={"space-between"}
                      fontSize={"14px"}
                    >
                      <Flex gap={"10px"}>
                        <Box fontSize={"20px"}>
                          <AiFillHeart />
                        </Box>
                        <Text>100 Likes</Text>
                      </Flex>
                      <Flex gap={"10px"}>
                        <Box fontSize={"20px"}>
                          <BiComment />
                        </Box>
                        <Text>100 Comments</Text>
                      </Flex>
                      <Flex gap={"10px"}>
                        <Box fontSize={"20px"}>
                          <BsShareFill />
                        </Box>
                        <Text>5.6K Shares</Text>
                      </Flex>
                      <Flex gap={"10px"}>
                        <Box fontSize={"20px"}>
                          <BsFillPinFill />
                        </Box>
                        <Text>1.6K Pin</Text>
                      </Flex>
                    </SimpleGrid>
                    <Flex mt={"20px"} gap={"10px"}>
                      <Image h={"50px"} src={profile} />
                      <Flex
                        w={"full"}
                        p={"10px"}
                        gap={"10px"}
                        borderRadius={"5px"}
                        bgColor={theme === "light" ? "#E0E0E0" : "#181D29"}
                      >
                        <Input
                          border={"none"}
                          variant={"unstyled"}
                          placeholder={"Write your comment"}
                        />
                        <Center>
                          <Box color={"#B9B9B9"} fontSize={"20px"}>
                            <ImImages />
                          </Box>
                        </Center>
                        <Center>
                          <Box color={"#B9B9B9"} fontSize={"20px"}>
                            <CgSmileMouthOpen />
                          </Box>
                        </Center>
                      </Flex>
                    </Flex>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box>
            <Flex direction={"column"} gap={"20px"}>
              <Box
                p={"10px"}
                bgColor={theme === "light" ? "#F6F6F6" : "#111823"}
                borderRadius={"15px"}
              >
                <Flex justifyContent={"space-between"}>
                  <Center>
                    <Text>Events</Text>
                  </Center>
                  <Center>
                    <Box>
                      <BsThreeDots />
                    </Box>
                  </Center>
                </Flex>
                <Flex gap={"10px"}>
                  <Center>
                    <Box p={"10px"} bgColor={"#0086FF"} borderRadius={"50%"}>
                      <Center>
                        <GoPlus />
                      </Center>
                    </Box>
                  </Center>
                  <Flex direction={"column"}>
                    <Text>Create an event</Text>
                    <Text fontSize={"13px"}>
                      Click button to create your event
                    </Text>
                  </Flex>
                </Flex>
                {djEvennts.map((el,i) => {
                  return (
                    <Flex key={i} m={"10px 0px"} gap={"10px"}>
                      <Image h={"50px"} src={profile} />
                      <Flex direction={"column"}>
                        <Text>{el.name}</Text>
                        <Text fontSize={"13px"}>15 February at 02:50 AM</Text>
                      </Flex>
                    </Flex>
                  );
                })}
                <Center>
                  <Button
                    w={"90%"}
                    variant={"unstyled"}
                    bgColor={"rgba(0, 134, 255, 0.1)"}
                  >
                    See all
                  </Button>
                </Center>
              </Box>
              <Box
                p={"10px"}
                bgColor={theme === "light" ? "#F6F6F6" : "#111823"}
                borderRadius={"15px"}
              >
                <Flex justifyContent={"space-between"}>
                  <Center>
                    <Text>Suggested Dj's</Text>
                  </Center>
                  <Center>
                    <Box fontSize={"13px"} color={"#0086FF"}>
                      See all
                    </Box>
                  </Center>
                </Flex>
                {djEvennts.map((el,i) => {
                  return (
                    <Flex key={i} direction={"column"} m={"20px 0px"} gap={"20px"}>
                      <Flex gap={"10px"}>
                        <Image h={"50px"} src={profile} />
                        <Flex direction={"column"}>
                          <Text>{el.name}</Text>
                          <Text fontSize={"13px"}>15 February at 02:50 AM</Text>
                        </Flex>
                      </Flex>
                      <Image h={"100px"} w={"100px"} src={profile} />
                    </Flex>
                  );
                })}
              </Box>
            </Flex>
          </Box>
          <Box
            w={["100%", "100%", "100%", "25%", "25%"]}
            bgColor={theme === "light" ? "#F6F6F6" : "#111823"}
            borderRadius={"15px"}
            h={"full"}
          >
            <Flex direction={"column"}>
              <Box p={"10px"} borderBottom={"1px solid #B9B9B9"}>
                <Text>Favourite Dj's</Text>
                {dj.map((el,i) => {
                  return (
                    <Flex key={i} m={"10px 0px"} justifyContent={"space-between"}>
                      <Flex
                        gap={"10px"}
                        direction={["column", "column", "row", "column", "row"]}
                      >
                        <Image h={"50px"} src={profile} />
                        <Center>
                          <Text>{el.name}</Text>
                        </Center>
                      </Flex>
                      <Center>
                        <Box
                          p={"5px 10px"}
                          bgColor={"#63D471"}
                          borderRadius={"5px"}
                          color={"white"}
                        >
                          <Center>
                            <Text>Active</Text>
                          </Center>
                        </Box>
                      </Center>
                    </Flex>
                  );
                })}
              </Box>
              <Box p={"10px"}>
                <Text>Dj's you may know</Text>
                {dj.map((el,i) => {
                  return (
                    <Flex key={i} m={"10px 0px"} justifyContent={"space-between"}>
                      <Flex gap={"10px"}>
                        <Image h={"50px"} src={profile} />
                        <Center>
                          <Text>{el.name}</Text>
                        </Center>
                      </Flex>
                      <Center>
                        <Box
                          p={"5px 10px"}
                          bgColor={"#0086FF"}
                          borderRadius={"5px"}
                          color={"white"}
                        >
                          <Center>
                            <Text>Follow</Text>
                          </Center>
                        </Box>
                      </Center>
                    </Flex>
                  );
                })}
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </UserNav>
  );
};

export default UserHome;
