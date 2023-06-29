import {
  Box,
  Center,
  Flex,
  Image,
  Input,
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
  BsFillPinFill,
  BsShareFill,
} from "react-icons/bs";
import { CgSmileMouthOpen } from "react-icons/cg";

const UserFavourite = () => {
  const dj = [
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
    {
      name: "rishav",
      description:
        "Internal Compass Music is excited to present to you a diverse roster of international artists we deep believe in as musicians, educators and people alike.",
    },
  ];
  const theme = useSelector((store) => store.app.theme);
  return (
    <UserNav>
      <Box
        borderRadius={"15px"}
        
      >
        <Box m={"0px 30px"}borderRadius={"15px"} textAlign={"left"} color={theme==="light"?"black":"white"} mt={"10px"}p={["10px 5%","10px 10%","10px 15%","10px 25%"]}bgColor={theme === "light" ? "#F6F6F6" : "#111823"}>
          {dj.map((el,i) => {
            return (
              <Box key={i}
                mb={"30px"}
                p={"10px"}
                
                
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
    </UserNav>
  );
};

export default UserFavourite;
