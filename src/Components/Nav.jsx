import React, { useEffect, useState } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  Switch,
  HStack,
  VStack,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Center,
  Image,
  useToast,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiUser,
} from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DJMenuChanger, themeChanger } from "../Redux/AppReducer/Action";

const LinkItems = [
  { name: "Home", icon: FiHome, url: "/dj" },
  { name: "Booking Request", icon: FiTrendingUp, url: "/dj/book" },
  { name: "Dj of the Week", icon: FiCompass, url: "/dj/djoftheweek" },
  { name: "Promos", icon: FiStar, url: "/dj/promos" },
  { name: "Reviews/Ratings", icon: FiSettings, url: "/dj/djoftheweek" },
  { name: "Messages", icon: FiUser, url: "/dj/messages" },
];
export function Dashboard({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = useSelector((store) => store.app.theme);
  return (
    <Box>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Box>
        <MobileNav onOpen={onOpen} />
        <Box
          pl={{ base: 0, md: 60 }}
          p="4"
          
          bgColor={theme === "light" ? "white" : "#0A0F1B"}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const theme = useSelector((store) => store.app.theme);
  const menu = useSelector((store) => store.app.djMenu);
  const dispatch = useDispatch();
  const updateNav=(pos)=>{
    dispatch(DJMenuChanger({name:pos}))
  }
  
  
  const handleTheme = () => {
    if (theme==="light") {
      dispatch(themeChanger({ theme: "dark" }));
    } else {
      dispatch(themeChanger({ theme: "light" }));
    }
    
  };
  return (
    <Box
      bgColor={theme === "light" ? "#F6F6F6" : "#111823"}
      w={{ base: "full", md: 60 }}
      position="absolute"
      left={"0"}
      top={"0"}
      zIndex={"99999"}
      h={"100%"}
      {...rest}
    >
      <Flex
        mb={"10px"}
        alignItems="center"
        mx="8"
        justifyContent="space-between"
      >
        <SimpleGrid
          ml={"40px"}
          gap={"1px"}
          mt={"10px"}
          fontSize={"20px"}
          borderRadius={"50%"}
          bgColor={"#007AFF"}
          columns={"2"}
          color={"white"}
          p={"10px 25px"}
          pl={"27px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text>S</Text>
          <Text>P</Text>
          <Text>O</Text>
          <Text>T</Text>
        </SimpleGrid>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
          <Link to={link.url}>
            <Box
            minH={"50px"}
              key={link.name}
              p={"10px 0px"}
              fontSize={"16px"}
              w={"100%"}
              mb={"10px"}
              bgColor={menu===link.name?"rgba(0, 134, 255, 0.05)":""}
              onClick={()=>updateNav(link.name)}
              pl={"20px"}
              color={menu===link.name?"#0086FF":theme==="light"?"#787878":"#B9B9B9"}
              _hover={{ color: "#0086FF", bgColor: "rgba(0, 134, 255, 0.05)" }}
            >
              <Flex gap={"30px"}justifyContent={"space-between"}>
                <Center>
                  <link.icon />
                </Center>
                <Center>{link.name}</Center>
                {
                  menu===link.name?(
                    <Box roundedLeft={"xl"} w={"10px"} h={"50px"} bgColor={"#0086FF"}></Box>
                  ):(<Box h={"50px"}></Box>)
                }
              </Flex>
            </Box>
          </Link>
      ))}
      <Box
        mt={"200px"}
        color={theme === "light" ? "#787878" : "#B9B9B9"}
        cursor={"pointer"}
      >
        <Text cursor={"pointer"}>Logout</Text>
      </Box>
      <Box cursor={"pointer"} mt={"20px"} mb={"20px"}>
        <Flex justifyContent={"center"} gap={"10px"} fontSize={"18px"}>
          <Text
            mt={"-5px"}
            border={"1px solid black"}
            p={"0px 8px"}
            bgColor={"white"}
            borderRadius={"15px"}
          >
            Light
          </Text>
          <Switch size={"md"} id="themeSwitch" defaultChecked={theme==="dark"} onChange={() => handleTheme()} />
          <Text
            mt={"-5px"}
            border={"0px solid black"}
            bgColor={"black"}
            color={"white"}
            p={"0px 8px"}
            borderRadius={"15px"}
          >
            Dark
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const handleLogout = () => {
    // dispatch(logout(toast));
    navigate("/");
  };
  const user = useSelector((store) => store.auth.user);
  const theme = useSelector((store) => store.app.theme);
  return (
    <Flex
      position={"sticky"}
      top={"0"}
      zIndex={"999"}
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      
      bgColor={theme === "light" ? "white" : "#0A0F1B"}
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{user.name}</Text>
                  <Text fontSize="xs" color="gray.600">
                    {user.administration}
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
              zIndex={"999"}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem onClick={handleLogout}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Dashboard;
