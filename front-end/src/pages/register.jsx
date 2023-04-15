import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onRegister = async () => {
    try {
      const data = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        storeName: document.getElementById("storeName").value,
        password: document.getElementById("password").value
      };

      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/register`,
        data
      );

      document.getElementById("username").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("storeName").value = "";
      document.getElementById("password").value = "";

      Swal.fire({
        icon: "success",
        title: result.data.message,
        showConfirmButton: false,
        timer: 1500
      });
    } catch (err) {
      if (err.response.data) {
        Swal.fire({
          icon: "error",
          title: err.response.data,
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          icon: "error",
          title: err.response.data.errors[0].message,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl" textAlign="center">
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded="lg"
          bg={useColorModeValue("white", "gray.700")}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="storeName" isRequired>
              <FormLabel>Store Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
                <InputRightElement h="full">
                  <Button
                    variant="ghost"
                    onClick={() =>
                      setShowPassword((show) => !show)
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
                bg="blue.400"
                color="white"
                _hover={{
                  bg: "blue.500"
                }}
                onClick={onRegister}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align="center">
                <Button color="blue.400" onClick={() => navigate("/")}>
                  Back to home
                </Button>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
