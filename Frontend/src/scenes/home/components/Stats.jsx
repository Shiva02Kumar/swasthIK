import React from "react";
import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

function StatsCard(props) {
  const { title, stat, icon, iconColor } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"5px solid"}
      borderColor={useColorModeValue("blue.800", "blue.200")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 5, md: 4 }}>
          <StatLabel
            color={useColorModeValue("blue.700", "blue.200")}
            fontWeight="extrabold"
            isTruncated
            fontSize="2xl"
          >
            {title}
          </StatLabel>
          <StatNumber
            color={useColorModeValue("blue.500", "blue.200")}
            fontSize={"2xl"}
            fontWeight={"bold"}
          >
            {stat}
          </StatNumber>
        </Box>
        <Box my={"auto"} color={iconColor} alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Stats() {
  return (
    <Container maxW={"5xl"} mt={12} mb={20}>
      <Box
        mb={200}
        maxW="7xl"
        mx={"auto"}
        pt={5}
        px={{ base: 2, sm: 12, md: 17 }}
      >
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={10}
          fontWeight={"bold"}
        >
          Our health network is expanding, you could be too.
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={"Patients"}
            stat={"5,000"}
            icon={<BsPerson size={"3em"} />}
            iconColor={useColorModeValue("red.500", "red.200")}
          />
          <StatsCard
            title={"Hopspitals"}
            stat={"1,000"}
            icon={<FiServer size={"3em"} />}
            iconColor={useColorModeValue("yellow.500", "yellow.200")}
          />
          <StatsCard
            title={"Districts"}
            stat={"7"}
            icon={<GoLocation size={"3em"} />}
            iconColor={useColorModeValue("green.500", "green.200")}
          />
        </SimpleGrid>
      </Box>
    </Container>
  );
}
