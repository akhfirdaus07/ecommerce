// import {
//   Flex,
//   Heading,
//   Stack,
//   Text,
//   useBreakpointValue
// } from "@chakra-ui/react";
// import React from "react";
// import axios from "axios";

// export const Products = () => {
//   const result = async () => {
//     await axios.get(`${process.env.REACT_APP_BASE_URL}/home`);
//   };
//   const product = result.data.data;
//   return (
//     <Stack minH="80vh" direction={{ base: "column", md: "row" }}>
//       <Flex p={8} flex={1} align="center" justify="center">
//         <Stack spacing={6} w="full" maxW="lg">
//           <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
//             <Text
//               as="span"
//               position="relative"
//               _after={{
//                 content: "''",
//                 width: "full",
//                 height: useBreakpointValue({ base: "20%", md: "30%" }),
//                 position: "absolute",
//                 bottom: 1,
//                 left: 0,
//                 bg: "blue.400",
//                 zIndex: -1
//               }}
//             >
//               Product
//             </Text>
//             <br />{" "}
//             <Text color="blue.400" as="span">
//               List
//             </Text>{" "}
//           </Heading>
//         </Stack>
//       </Flex>
//     </Stack>
//   );
// };

import React, { useState } from "react";
import { Grid, Center, Text, Stack, Image } from "@chakra-ui/react";
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
  // const fetchProducts = async (pageSize, offset) => {
  //   await axios.get(
  //     `${process.env.REACT_APP_BASE_URL}/home?offset=${offset}&limit=${pageSize}`
  //   )
  //   .then(async (res) => {
  //     console.log(res.data);
  //   });
  // };

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

  // effects
  // useEffect(() => {
  //   fetchProducts(pageSize, offset).then((res) => {
  //     // console.log(res);
  //     setProductsTotal(res);
  //     setProducts(res);
  //   });
  // }, [currentPage, pageSize, offset]);

  // useEffect(() => {
  //   console.log(products);
  //   console.log(productsTotal);
  // }, [products, productsTotal]);

  // handlers
  const handlePageChange = (nextPage) => {
    // -> request new data using the page number
    setCurrentPage(nextPage);
  };

  return (
    <Stack>
      <Grid
        gap={3}
        mt={20}
        mb={20}
        px={20}
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(2, 1fr)"
      >
        {products?.map(
          ({
            id,
            name,
            price,
            description,
            image,
            createdAt,
            updatedAt,
            sellerId,
            categoryId
          }) => (
            <Center key={id} bg="yellow.300" p={4}>
              <Text>{name}</Text>
              <Text>Rp{price}</Text>
              <Text>{description}</Text>
              <Image boxSize='100px' src={image} />
              <Text>{createdAt}</Text>
              <Text>{updatedAt}</Text>
              <Text>{sellerId}</Text>
              <Text>{categoryId}</Text>
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
          justify="space-between"
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
                w={6}
                bg="red.300"
                key={`pagination_page_${page}`}
                page={page}
                fontSize="xs"
                _hover={{
                  bg: "yellow.500"
                }}
                _current={{
                  bg: "yellow.300",
                  fontSize: "xs",
                  w: 6
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
