import { Box, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const series = [{ name: "series1", data: [31, 120, 10, 28, 18, 109, 100] }];

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

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type UserChartProps = {
  label: string;
};

export function UserChart({ label }: UserChartProps) {
  const [resetChart, setResetChart] = useState(false);

  useEffect(() => {
    setResetChart(false);
  }, [resetChart]);
  
  return (
    <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
      <Text fontSize="lg">{label}</Text>
      <Chart options={options} series={series} type="area" height={160} />
    </Box>
  );
}
