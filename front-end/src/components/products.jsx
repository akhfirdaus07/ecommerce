import React, {
  useState,
  useEffect
  // useRef
} from "react";
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
  HStack,
  VStack,
  Input
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
  const [categories, setCategories] = useState([]);

  const fetchProducts = async (sort, offset, pageSize, filter, search) => {
    await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/home?offset=${offset}&limit=${pageSize}&sort=${sort}&filter=${filter}&search=${search}`
      )
      .then((res) => {
        setProductsTotal(res.data.count);
        setProducts(res.data.results);
        setCategories(res.data.categories);
      });
  };

  // states
  const [sort, setSort] = useState("default");
  const [filter, setFilter] = useState("default");
  const [search, setSearch] = useState("");

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

  // handlers
  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange=(e)=>{
    console.log(e.target.value);
    setSearch(e.target.value)
  };

  useEffect(() => {
    fetchProducts(sort, offset, pageSize, filter, search);
    setCurrentPage(currentPage);
  }, [sort, offset, pageSize, filter,search, currentPage]);

  return (
    <Stack>
      <HStack align="flex-end" justify="space-between" mt={10} mr={100} ml={100}>
        <VStack align="flex-start">
          <HStack spacing="35px">
            <Text>Search</Text>
            <Input placeholder="Search by Product Name" size="md" onChange={handleSearchChange} />
          </HStack>
          <HStack spacing="10px" justify="flex-start">
            <Text>Categories</Text>
            <Select onChange={(e) => handleFilterChange(e)} w={40}>
              <option value="default">All</option>
              {categories.map(({ name }) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </Select>
          </HStack>
        </VStack>
        <HStack>
          <Text>Sort By</Text>
          <Select onChange={(e) => handleSortChange(e)} w={40}>
            <option value="default">Most Relevant</option>
            <option value="ascendAlpha">Name: A-Z</option>
            <option value="descendAlpha">Name: Z-A</option>
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
        templateRows="repeat(1, 1fr)"
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
