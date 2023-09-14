import React, { useState } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tooltip,
  Badge,
  AvatarBadge,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
// import {  } from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiPhoneCall,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { BsHospital } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RxAvatar } from "react-icons/rx";

const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Appointment", icon: BsHospital },
  { name: "News&Updates", icon: FiTrendingUp },
  { name: "Hospitals", icon: FiCompass },
  { name: "Records", icon: FiStar },
  { name: "LogIN", icon: FiSettings },
  { name: "ChartsMaps", icon: HiOutlineLocationMarker },
];

const SidebarContent = ({ onClose, ...rest }) => {
  // const handleRoute = (e) => {};
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Link style={{ textDecoration: "none" }} to={`/${link.name}`}>
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        </Link>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  const location = useLocation();

  // Define the active route name based on the pathname
  const activeRouteName = location.pathname.replace("/", "");

  // Define the border color for the active route
  const activeBorderColor =
    activeRouteName === children ? "blue" : "transparent";
  return (
    <Box
      as="a"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        sx={{ border: `2px solid ${activeBorderColor}` }} // Apply the active border color
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const [login, setLogin] = useState(false);

  return (
    <>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="1px"
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
          <Tooltip label="Call Emergency">
            <IconButton
              colorScheme="red"
              size="lg"
              variant="ghost"
              aria-label="open menu"
              icon={<FiPhoneCall />}
            />
          </Tooltip>
          <Tooltip label="Notification">
            <>
              <IconButton
                colorScheme="blue"
                size="lg"
                variant="ghost"
                aria-label="open menu"
                icon={<FiBell />}
              />
              {/* <Badge colorScheme="purple">+69 NEW</Badge> */}
            </>
          </Tooltip>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                py={2}
                onClick={() => {
                  console.log("clicked");
                  setLogin(!login);
                }}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  {!login ? (
                    <Button
                      onClick={() => {
                        setLogin(!login);
                      }}
                      // leftIcon={<RxAvatar />}
                      colorScheme="pink"
                      variant="solid"
                    >
                      <Link style={{ textDecoration: "none" }} to={"/SignUP"}>
                        <Text>Signup</Text>
                      </Link>
                    </Button>
                  ) : (
                    <>
                      <Avatar
                        name="kashsh khera"
                        bg="teal.300"
                        src="https://bit.ly/broken-link"
                      />

                      <VStack
                        display={{ base: "none", md: "flex" }}
                        alignItems="flex-start"
                        spacing="1px"
                        ml="2"
                      >
                        <Text fontSize="sm">Kashish Khera </Text>
                        <Text fontSize="xs" color="gray.600">
                          Patient
                        </Text>
                      </VStack>
                      <Box display={{ base: "none", md: "flex" }}>
                        <FiChevronDown />
                      </Box>
                    </>
                  )}
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue("white", "gray.900")}
                borderColor={useColorModeValue("gray.200", "gray.700")}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
                <MenuDivider />
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
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
      <MobileNav onOpen={onOpen} />
    </Box>
  );
};

export default Navbar;
