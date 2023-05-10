import React from "react";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
const RightView = ({ children, image }) => {
  return (
    <Box fontFamily={"Poppins"} fontStyle={"normal"}>
      <Flex>
        <Box h={"99%"} w={"90%"}>
          {children}
        </Box>
        <Box
          w={"900px"}
          h="100vh"
          backgroundImage={`url(${image})`}
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Box position="relative" height="100vh">
            <Box
              position="absolute"
              bottom="0"
              width="100%"
              textAlign="left"
              paddingBottom="7"
              color={"white"}
            >
              <Box
                w={"90%"}
                h={"300px"}
                margin={"auto"}
                backdropFilter={"blur(5px)"}
              >
                <Box
                  p={"50px"}
                  fontSize={"25px"}
                  lineHeight={"30px"}
                >
                  <Text mb={"50px"}>
                    " Music has been used for therapeutic purposes in a variety
                    of settings "
                  </Text>
                  <Flex>
                    <Box>
                      <Text fontSize={"18px"}>Adrin Laue</Text>
                      <Text fontWeight={"normal"} fontSize={"15px"}>Founder Member</Text>
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
