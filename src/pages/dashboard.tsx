import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  series: [
    {
      name: "sales",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ],
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-03-18T00:00:00:000Z",
      "2022-03-19T00:00:00:000Z",
      "2022-03-21T00:00:00:000Z",
      "2022-03-22T00:00:00:000Z",
      "2022-03-30T00:00:00:000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.5,
    },
  },
};

const series = [
  { name: "Desktops", data: [10, 41, 35, 51, 49, 62, 69, 91, 148] },
];

export default function Dashboard() {
  
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg">Inscritos da Semanass</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg">Taxa de Abertura</Text>
            <Chart options={options} series={series} type="line" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
