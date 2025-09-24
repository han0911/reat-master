import { useQuery } from "@tanstack/react-query";
import ApexCharts from "react-apexcharts";
import { fetchCoinHistory } from "../api";

interface IHistoricalData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinid?: string;
}

function Chart({ coinid }: ChartProps) {
  const { isLoading, data } = useQuery<IHistoricalData[]>({
    queryKey: ["ohlcv", coinid],
    queryFn: () => fetchCoinHistory(coinid!),
  });

  if (isLoading) {
    return <span>Loading chart...</span>;
  }

  if (!data || data.length === 0) {
    return <span>No chart data available</span>;
  }

  // ApexCharts 컴포넌트에 필요한 options와 series 데이터가 없습니다.
  // 이 부분은 데이터를 가공하여 추가해야 합니다.
  const chartOptions = {
    stroke: {
      curve: "",
    },
  };
  const chartSeries = [
    {
      name: "Price",
      data: data.map((d) => ({
        x: new Date(d.time_close).getTime(),
        y: [d.open, d.high, d.low, d.close],
      })),
    },
  ];

  return (
    <ApexCharts
      type="candlestick"
      series={chartSeries}
      options={chartOptions}
    />
  );
}

export default Chart;
