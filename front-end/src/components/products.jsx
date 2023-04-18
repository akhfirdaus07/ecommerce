import React, { useState } from "react";
import {
  Grid,
  Text,
  Stack,
  Image,
  Card,
  CardBody,
  Divider,
  CardFooter,
  Button,
  ButtonGroup,
  Heading,
  Center,
  Select,
  HStack
} from "@chakra-ui/react";
import {
  Pagination,
  usePagination,
  PaginationPage,
  PaginationNext,
  PaginationPrevious,
  PaginationPageGroup,
  PaginationContainer
} from "@ajna/pagination";
import axios from "axios";

export const Products = () => {
  // states
  const [productsTotal, setProductsTotal] = useState();
  const [products, setProducts] = useState([]);

  const fetchProducts = async (pageSize, offset) => {
    await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/home?offset=${offset}&limit=${pageSize}`
      )
      .then((res) => {
        setProductsTotal(res.data.count);
        setProducts(res.data.results);
      });
  };

  // constants
  const outerLimit = 1;
  const innerLimit = 1;

  const { pages, pagesCount, offset, currentPage, setCurrentPage, pageSize } =
    usePagination({
      total: productsTotal,
      limits: {
        outer: outerLimit,
        inner: innerLimit
      },
      initialState: {
        pageSize: 9,
        currentPage: 1,
        offset: 0
      }
    });

  fetchProducts(pageSize, offset);

  // handlers
  const handlePageChange = (nextPage) => {
    // -> request new data using the page number
    setCurrentPage(nextPage);
  };

  const handleSort = (event) => {
    const sort = event.target.value;
  };

  return (
    <Stack>
      <HStack spacing="24px" justify="space-evenly" mt={10}>
        <HStack spacing="24px" >
          <Text>Sort By</Text>
          <Select ml={3} 
          onChange={handleSort} 
          w={40}>
            <option value="">Most Relevant</option>
            <option value="ascendAlpha">Name: A-Z</option>
            <option value="descendAlpha">Name: A-Z</option>
            <option value="ascendPrice">Price: Low-High</option>
            <option value="descendPrice">Price: High-Low</option>
          </Select>
        </HStack>
      </HStack>

      <Grid
        gap={3}
        mt={10}
        mb={10}
        px={20}
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(2, 1fr)"
      >
        {products?.map(
          ({ id, name, price, description, image, User, Category }) => (
            <Center key={id} p="4" axis="both">
              <Card maxW="sm">
                <CardBody>
                  <Center p="4" axis="both">
                    <Image
                      src={image}
                      alt={name}
                      borderRadius="lg"
                      boxSize="200px"
                    />
                  </Center>
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{name}</Heading>
                    <Text as="i">Category: {Category.name}</Text>
                    <Text>{description}</Text>
                    <Text color="blue.600" fontSize="2xl">
                      Rp{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </Text>
                    <Text as="i">Seller: {User.storeName}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Buy now
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </Center>
          )
        )}
      </Grid>
      <Pagination
        pagesCount={pagesCount}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      >
        <PaginationContainer
          align="center"
          justify="space-evenly"
          p={3}
          w="full"
        >
          <PaginationPrevious
            _hover={{
              bg: "blue.400"
            }}
            bg="blue.300"
          >
            <Text>Previous</Text>
          </PaginationPrevious>
          <PaginationPageGroup isInline align="center">
            {pages.map((page) => (
              <PaginationPage
                w={10}
                bg="red.300"
                key={`pagination_page_${page}`}
                page={page}
                fontSize="lg"
                _hover={{
                  bg: "yellow.500"
                }}
                _current={{
                  bg: "yellow.300",
                  fontSize: "lg",
                  w: 10
                }}
              />
            ))}
          </PaginationPageGroup>
          <PaginationNext
            _hover={{
              bg: "blue.400"
            }}
            bg="blue.300"
          >
            <Text>Next</Text>
          </PaginationNext>
        </PaginationContainer>
      </Pagination>
    </Stack>
  );
};
