import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
const RightView = ({ children, image, pr = "150px" }) => {
  const [size, setSize] = useState(window.innerWidth);

  const updateSize = () => setSize(window.innerWidth);
  useEffect(() => (window.onresize = updateSize), []);
  return (
    <Box fontFamily={"Poppins"} fontStyle={"normal"}>
      <Flex>
        <Box w={["100%", "100%", "50%", "50%"]}>
          <Box
            pl={["25px", "50px", "75px", "100px"]}
            pr={["10px", "10px", "90px", pr]}
          >
            {children}
          </Box>
        </Box>
        <Box
          h={"100vh"}
          hidden={size <= 750}
          w={["0px", "0px", "50%", "50%"]}
          backgroundImage={`url(${image})`}
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Box
            position="relative"
            height={["0px", "0px", "100%", "100%"]}
            color={"white"}
          >
            <Box
              position="absolute"
              bottom="0"
              width="100%"
              textAlign="left"
              paddingBottom="7"
            >
              <Box
                margin={"auto"}
                backdropFilter={"blur(5px)"}
                ml={"50px"}
                mr={"70px"}
              >
                <Box
                  p={["20px", "30px", "40px", "50px"]}
                  fontSize={["12px", "15px", "20px", "25px"]}
                  lineHeight={"30px"}
                >
                  <Text mb={["20px", "30px", "40px", "40px"]}>
                    " Music has been used for therapeutic purposes in a variety
                    of settings "
                  </Text>
                  <Flex>
                    <Box w={"100%"}>
                      <Flex
                        justifyContent={"space-between"}
                        gap={"10px"}
                        direction={["column", "column", "column", "row"]}
                      >
                        <Box>
                          <Text fontSize={"18px"}>Adrin Laue</Text>
                          <Text fontWeight={"normal"} fontSize={"15px"}>
                            Founder Member
                          </Text>
                        </Box>
                        <Box>
                          <Flex direction={"column"} gap={"10px"}>
                            <Flex gap={"10px"}>
                              <Image
                                h={"20px"}
                                src="https://i.ibb.co/jgjw35f/star-48.png"
                                alt="star-48"
                              />
                              <Image
                                h={"20px"}
                                src="https://i.ibb.co/jgjw35f/star-48.png"
                                alt="star-48"
                              />
                              <Image
                                h={"20px"}
                                src="https://i.ibb.co/jgjw35f/star-48.png"
                                alt="star-48"
                              />
                              <Image
                                h={"20px"}
                                src="https://i.ibb.co/jgjw35f/star-48.png"
                                alt="star-48"
                              />
                            </Flex>
                            <Flex gap={"45px"}>
                              <Box
                                p={"10px"}
                                border={"1px solid #B9B9B9"}
                                borderRadius={"50%"}
                              >
                                <Image
                                  h={"10px"}
                                  src="https://i.ibb.co/2WTMyCH/arrow-89-48.png"
                                  alt="arrow-89-48"
                                  border="0"
                                />
                              </Box>
                              <Box
                                p={"10px"}
                                border={"1px solid #B9B9B9"}
                                borderRadius={"50%"}
                              >
                                <Image
                                  h={"10px"}
                                  src="https://i.ibb.co/DVYHXb6/arrow-24-48.png"
                                  alt="arrow-89-48"
                                  border="0"
                                />
                              </Box>
                            </Flex>
                          </Flex>
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default RightView;
