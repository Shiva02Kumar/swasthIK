import { Box, Heading, Text } from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";
import Map from "./Maps";

export default function ChartsMaps() {
  return (
    <Box textAlign="center" py={10} px={5}>
      <DragHandleIcon boxSize={"50px"} color={"blue.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Check all the hospitals
      </Heading>

      <Box mt={15}>
        <Map />
      </Box>
    </Box>
  );
}
