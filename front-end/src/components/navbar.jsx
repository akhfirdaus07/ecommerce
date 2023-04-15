import {
  Avatar,
  Button,
  Flex,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const onSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <HStack
      justify="space-between"
      align="center"
      shadow="base"
      bgColor="gray.50"
      w="100vw"
      h="16"
    >
      <Flex justify="flex-start" align="center" ml="4">
        <Text as="b" fontSize='3xl'>Tokopakedi!</Text>
      </Flex>
      <Flex justify="flex-end" align="center" mr="4">
        {token ? (
          <>
            <Text as="b" mr="2">
              Hello, {username}!
            </Text>
            <Menu>
              <Avatar
                as={MenuButton}
                name={username}
                src="https://bit.ly/broken-link"
                mr="4"
              />
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Report</MenuItem>
                <MenuItem onClick={onSignOut}>Sign Out</MenuItem>
              </MenuList>
            </Menu>
          </>
        ) : (
          <>
            <Button
              onClick={() => navigate("/login")}
              rounded="full"
              bg="blue.400"
              color="white"
              _hover={{
                bg: "blue.500"
              }}
              mr="2"
            >
              Login
            </Button>
            <Button mr="4" rounded="full" onClick={() => navigate("/register")}>
              Register
            </Button>
          </>
        )}
      </Flex>
    </HStack>
  );
};
