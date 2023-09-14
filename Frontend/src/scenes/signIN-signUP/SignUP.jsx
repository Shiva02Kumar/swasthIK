import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

export default function SignUP() {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Check if all required fields are filled
    setIsFormValid(
      userData.firstName &&
        userData.email &&
        userData.password &&
        userData.confirmPassword &&
        userData.password === userData.confirmPassword
    );
  }, [userData]);

  function throwToast({ title, status, description }) {
    const toast = useToast();
    return toast({
      title: title,
      description: description,
      status: status,
      duration: 9000,
      isClosable: true,
    });
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to access Himachal Pradesh Hospitals
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    name="firstName"
                    onChange={(e) => {
                      setUserData({
                        ...userData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    name="lastName"
                    onChange={(e) => {
                      setUserData({
                        ...userData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={(e) => {
                  setUserData({ ...userData, [e.target.name]: e.target.value });
                }}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="confirmPassword" isRequired>
              <FormLabel>Confirm your Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={async (e) => {
                  // Check if the form is valid
                  if (isFormValid) {
                    try {
                      console.log("reactfile msg send");
                      const { data } = await axios.post(
                        "http://localhost:5000/user/signup",
                        {
                          ...userData,
                        }
                      );
                      console.log(data);
                      throwToast(data);
                    } catch (error) {
                      console.log(error.message); //
                    }
                  } else {
                    // throwToast(data.title, data.description, data.status);
                  }
                }}
                isDisabled={!isFormValid}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to={`/LogIN`}>
                  {" "}
                  <Text color={"blue.400"}>Login</Text>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
