import React from "react";
import {
  Box,
  Center,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Logo = (props) => {
  return (
    <img
      style={{ height: "50px" }}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Emblem_of_India_%28Government_Gazette%29.svg/1356px-Emblem_of_India_%28Government_Gazette%29.svg.png"
      alt="Logo"
      {...props}
    />
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box mt={200}
      marginTop="value"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Box style={{ width: "100%" }}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Logo />
          <Text textAlign={'Center'} fontSize="lg">
            Made with ❤️ for government of <b>Himachal Pradesh</b> in{" "}
            <b>Bharat</b>{" "}
            <img
              style={{ display: "inline-flex" }}
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png"
              alt="Indian Flag"
              width="20"
              height="20"
            />
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
