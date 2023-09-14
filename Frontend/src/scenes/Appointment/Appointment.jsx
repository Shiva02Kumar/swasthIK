import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInput,
  Tag,
  TagLabel,
  TagCloseButton,
  HStack,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

const Form1 = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Patient Details
      </Heading>
      <Flex>
        <FormControl isRequired mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl>
      </Flex>
      <FormControl isRequired mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Phone
        </FormLabel>
        <InputGroup size="sm">
          <InputLeftAddon
            bg="gray.50"
            _dark={{
              bg: "gray.800",
            }}
            color="gray.500"
            rounded="md"
          >
            +91
          </InputLeftAddon>
          <Input
            type="tel"
            placeholder="9999999999"
            focusBorderColor="brand.400"
            rounded="md"
          />
          <NumberInput>
            <NumberInputField max={10} min={10} />
            {/* <NumberInputStepper> */}
            {/* <NumberIncrementStepper />
            <NumberDecrementStepper /> */}
            {/* </NumberInputStepper> */}
          </NumberInput>
        </InputGroup>
        {/* <Input id="email" type="email" /> */}
        <FormHelperText>
          We&apos;ll never share your leak your detail.
        </FormHelperText>
      </FormControl>
      <Flex mt="2%">
        <FormControl isRequired mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            Age
          </FormLabel>
          <NumberInput>
            <NumberInputField max={9} min={1} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Gender
          </FormLabel>
          <Select placeholder="Select Gender">
            <option>Male</option>
            <option>Female</option>
            <option>others</option>
          </Select>
        </FormControl>
      </Flex>
    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Patient Address
      </Heading>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl mt={"2%"} as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          select district
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        >
          <option>Shimla</option>
          <option>Kangra</option>
          <option>Chamba</option>
          <option>Dharamshala</option>
        </Select>
      </FormControl>

      <FormControl mt={"2%"} as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Street address
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </>
  );
};

const Form3 = () => {
  const [symptoms, setSymptoms] = useState([]); // State to hold the array of symptoms
  const [newSymptom, setNewSymptom] = useState(""); // State to hold the new symptom input

  // Function to handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && newSymptom.trim() !== "") {
      // Check if Enter key is pressed and input is not empty
      setSymptoms([...symptoms, newSymptom.trim()]); // Add new symptom to the array
      setNewSymptom(""); // Clear the input field
    }
  };

  // Function to handle input value change
  const handleInputChange = (e) => {
    setNewSymptom(e.target.value);
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Symptoms
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            What symptoms are you feeling
          </FormLabel>
          <Textarea
            placeholder="Press 'Enter' to add"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: "sm",
            }}
            value={newSymptom}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <FormHelperText>add 'general' if unaware</FormHelperText>
        </FormControl>
        <Box spacing={4}>
          {symptoms.map((symptom, index) => (
            <Tag
              m={"1"}
              size="md" // You can adjust the size as needed
              key={index}
              borderRadius="full"
              variant="solid"
              colorScheme="blue"
            >
              <TagLabel>{symptom}</TagLabel>
              <TagCloseButton
                onClick={() => {
                  // Remove the selected symptom from the array
                  const updatedSymptoms = [...symptoms];
                  updatedSymptoms.splice(index, 1);
                  setSymptoms(updatedSymptoms);
                }}
              />
            </Tag>
          ))}
        </Box>
      </SimpleGrid>
    </>
  );
};

export default function Appointment() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
