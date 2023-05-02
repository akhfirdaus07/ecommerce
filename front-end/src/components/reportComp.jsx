import React, { useEffect, useState } from "react";
import {
  Card,
  //   Image,
  //   Stack,
  //   CardBody,
  Heading,
  //   Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Divider
  //   CardFooter,
  //   Button
} from "@chakra-ui/react";
import axios from "axios";

export const ReportComp = () => {
  const [dataByDay, setData] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    await axios.get(`${process.env.REACT_APP_BASE_URL}/report`).then((res) => {
      setData(res.data.dataByDay);
      setProducts(res.data.productSold);
    });
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <Card overflow="hidden" variant="outline" ml="40" mt="10" mr="40" mb="10">
      <Heading size="2xl" textAlign="center" my="5">
        Reports
      </Heading>
      <Tabs variant="unstyled">
        <TabList>
          <Tab _selected={{ color: "white", bg: "blue.500" }}>
            Gross Income Day by Day
          </Tab>
          <Tab _selected={{ color: "white", bg: "green.400" }}>
            Total Transaction Day by Day
          </Tab>
          <Tab _selected={{ color: "white", bg: "red.400" }}>
            Top Selling Product
          </Tab>
        </TabList>
        <Divider />
        <TabPanels>
          <TabPanel>
            {dataByDay.map(({ date, totalIncome }) => (
              <TabPanel>
                <p>{date}</p>
                <p>{totalIncome}</p>
              </TabPanel>
            ))}
          </TabPanel>
          <TabPanel>
            {dataByDay.map(({ date, totalTransaction }) => (
              <TabPanel>
                <p>{date}</p>
                <p>{totalTransaction}</p>
              </TabPanel>
            ))}
          </TabPanel>
          <TabPanel>
            {products.map(({ name, totalSold }) => (
              <TabPanel>
                <p>{name}</p>
                <p>{totalSold}</p>
              </TabPanel>
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
};
