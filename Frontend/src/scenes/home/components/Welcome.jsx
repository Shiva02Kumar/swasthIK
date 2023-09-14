import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Box,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Welcome() {
  return (
    <Stack minH={"60vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            {/* <Box textAlign={"Center"}> */}
            <Text
              as={"span"}
              position={"relative"}
              //   textAlign={'Center'}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Welcome
            </Text>
            {/* </Box> */}
            <br />
            <Text textAlign={"Center"} color={"cyan.400"} as={"span"}>
              Establishing Healthy India
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            This is the prototype of the problem statement issued by Govt. of
            Himachal Pradesh
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Link style={{ textDecoration: "none" }} to={`/Appointment`}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Book Appointment
              </Button>
            </Link>
            <Button rounded={"full"}>Check Status</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} justify={"center"} align={"center"}>
        <Box boxSize="sm">
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={"https://www.cowin.gov.in/assets/images/independance.svg"}
          />
        </Box>
      </Flex>
    </Stack>
  );
}
