import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
  Card,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Divider,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Select
} from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export const ReportComp = () => {
  const [dataByDay, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [startDate, setStartDate] = useState(
    new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]
  );
  const [endDate, setEndDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [filter, setFilter] = useState("default");
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/report?startDate=${startDate}&endDate=${endDate}&filter=${filter}`
      )
      .then((res) => {
        setData(res.data.dataByDay);
        setProducts(res.data.productSold);
        setCategories(res.data.categories);
      });
  };

  const onChangeDate = async () => {
    try {
      setStartDate(document.getElementById("startDate").value);
      setEndDate(document.getElementById("endDate").value);
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

  const onFilterChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, [startDate, endDate, filter]);

  return (
    <Card overflow="hidden" variant="outline" ml="40" mt="10" mr="40" mb="10">
      <Heading size="2xl" textAlign="center" my="5">
        Reports
      </Heading>
      <Tabs variant="enclosed">
        <TabList justifyContent="space-between">
          <Tab _selected={{ color: "white", bg: "blue.500" }}>
            Gross Income Day by Day
          </Tab>
          <Tab _selected={{ color: "white", bg: "red.400" }}>
            Total Transaction Day by Day
          </Tab>
          <Tab _selected={{ color: "white", bg: "green.300" }}>
            Top Selling Product
          </Tab>

          <Stack spacing="10px" direction={["column", "row"]} pr="2" pb="2">
            <FormControl id="startDate" onChange={onChangeDate}>
              <FormLabel fontSize="xs" textAlign="center">
                Start Date
              </FormLabel>
              <Input
                defaultValue={
                  new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                    .toISOString()
                    .split("T")[0]
                }
                size="xs"
                type="date"
              />
            </FormControl>
            <FormControl id="endDate" onChange={onChangeDate}>
              <FormLabel fontSize="xs" textAlign="center">
                End Date
              </FormLabel>
              <Input
                defaultValue={new Date().toISOString().split("T")[0]}
                size="xs"
                type="date"
              />
            </FormControl>
          </Stack>
        </TabList>

        <Divider />
        <TabPanels>
          <TabPanel align="center" mt="10" mb="5">
            <BarChart
              width={1000}
              height={500}
              data={dataByDay}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis
                tickFormatter={(value) =>
                  `Rp${new Intl.NumberFormat("id-ID", {
                    notation: "compact",
                    compactDisplay: "short"
                  }).format(value)}`
                }
              />
              <Tooltip
                formatter={(value) =>
                  `Rp${new Intl.NumberFormat(["ban", "id"]).format(value)}`
                }
                labelFormatter={(value) => `Date: ${value}`}
              />
              <Legend />
              <Bar name="Gross Income" dataKey="totalIncome" fill="#2196F3" />
            </BarChart>
          </TabPanel>
          <TabPanel align="center" mt="10" mb="5">
            <BarChart
              width={1000}
              height={500}
              data={dataByDay}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip labelFormatter={(value) => `Date: ${value}`} />
              <Legend />
              <Bar
                name="Total Transaction"
                dataKey="totalTransaction"
                fill="#EF5350"
              />
            </BarChart>
          </TabPanel>
          <TabPanel>
            <Stack direction={["column", "row"]} spacing="10px" justify="center" align="center" mt="2">
              <Text >Categories</Text>
              <Select onChange={(e) => onFilterChange(e)} w={40}>
                <option value="default">All</option>
                {categories.map(({ name }) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
            </Stack>

            <TableContainer px="100" my="10">
              <Table variant="striped" colorScheme="whatsapp" size="sm">
                <Thead>
                  <Tr>
                    <Th textAlign="center" fontSize="lg">
                      No
                    </Th>
                    <Th textAlign="center" fontSize="lg">
                      Product Name
                    </Th>
                    <Th textAlign="center" fontSize="lg">
                      Total Sold
                    </Th>
                    <Th textAlign="center" fontSize="lg">
                      Category
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {products.map(
                    ({ name, totalSold, "Category.name": category }, i) => (
                      <Tr>
                        <Td textAlign="center">{i + 1}</Td>
                        <Td>{name}</Td>
                        <Td textAlign="center">{totalSold}</Td>
                        <Td textAlign="center">{category}</Td>
                      </Tr>
                    )
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
};
