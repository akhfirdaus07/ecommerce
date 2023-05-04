import {
  Avatar,
  Button,
  Flex,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Stack,
  Portal,
  PopoverFooter,
  Image,
  MenuItem
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const onSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const onHome = () => {
    navigate("/");
  };

  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/home?offset=0&limit=9`)
      .then((res) => {
        setCart(res.data.cartData);
      });
  };

  useEffect(() => {
    fetchCart();
  }, [cart]);

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
        <Text as="b" fontSize="3xl" color="red.500" onClick={onHome}>
          TokoSebelah!
        </Text>
      </Flex>
      <Flex justify="flex-end" align="center" mr="4">
        {token ? (
          <>
            <Text as="b" mr="2">
              Hi, {username}!
            </Text>
            <Stack mr="2">
              <Popover>
                <PopoverTrigger>
                  <Button
                    leftIcon={<FaShoppingCart size="1.5em" />}
                    color="black"
                    size="lg"
                    p="0"
                    bg="gray.50"
                  />
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>Your Cart!</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      {cart?.map(
                        ({
                          "Product.image": image,
                          "Product.name": productName,
                          qty,
                          "Product.price": price
                        }) => (
                          <Stack
                            direction={["column", "row"]}
                            align="center"
                            justify="space-between"
                            gap="2"
                          >
                            <Image
                              src={image}
                              borderRadius="lg"
                              boxSize="50px"
                            />
                            <Stack>
                            <Text fontSize="sm">
                              {productName}
                            </Text>
                            <Text fontSize="xs">
                              x {qty} 
                            </Text>
                            </Stack>
                            <Text fontSize="sm">
                              Rp{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Text>
                          </Stack>
                        )
                      )}
                    </PopoverBody>
                    <PopoverFooter justify="end" align="end">
                      <Button colorScheme="green" size="xs">
                        Proceed
                      </Button>
                    </PopoverFooter>
                  </PopoverContent>
                </Portal>
              </Popover>
            </Stack>
            <Menu>
              <Avatar
                as={MenuButton}
                name={username}
                src="https://bit.ly/broken-link"
                mr="4"
              />
              <MenuList>
                <MenuItem onClick={() => navigate("/report")}>Report</MenuItem>
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
