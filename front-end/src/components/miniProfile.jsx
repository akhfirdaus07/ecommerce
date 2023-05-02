import React, { useEffect, useState } from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text
  //   CardFooter,
  //   Button
} from "@chakra-ui/react";
import axios from "axios";

export const MiniProfile = () => {
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    await axios.get(`${process.env.REACT_APP_BASE_URL}/report`).then((res) => {
      setUser(res.data.userData);
    });
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      ml="40"
      mt="10"
      mr="40"
      mb="10"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      />

      <Stack>
        <CardBody>
          <Heading size="2xl">Username: {user.username}</Heading>

          <Text as="i" fontSize="3xl">
            Store Name: {user.storeName}
          </Text>
          <Text fontSize="lg">Email: {user.email}</Text>
          <Text fontSize="lg">Phone: {user.phone}</Text>
        </CardBody>

        {/* <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Buy Latte
          </Button>
        </CardFooter> */}
      </Stack>
    </Card>
  );
};
