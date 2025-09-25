import { useQuery } from "@tanstack/react-query";
import type { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
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
    enabled: !!coinid,
  });

  if (!coinid) return <span>No coin selected</span>;
  if (isLoading) return <span>Loading chart...</span>;
  if (!data || data.length === 0) return <span>No chart data available</span>;

  const chartOptions: ApexOptions = {
    theme: {
      mode: "dark",
    },
    chart: {
      type: "candlestick",
      height: 350,
      background: "transparent",
      toolbar: { show: false },
    },
    xaxis: {
      type: "datetime", // ✅ 데이터의 x 값이 timestamp니까 datetime으로 둬야 함
    },
    yaxis: {
      tooltip: { enabled: true },
      labels: {
        formatter: (val: number) => val.toFixed(2), // ✅ 항상 소수점 둘째자리
      },
    },
    tooltip: {
      theme: "dark", // ✅ 툴팁 배경 흰색 → 다크 스타일
      y: {
        formatter: (val: number | string) =>
          typeof val === "number" ? val.toFixed(2) : String(val),
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#26a69a",
          downward: "#ef5350",
        },
      },
    },
  };

  const chartSeries: ApexOptions["series"] = [
    {
      name: "Price",
      data: data.map((d) => ({
        x: new Date(d.time_close).getTime(), // ✅ timestamp
        y: [d.open, d.high, d.low, d.close], // ✅ OHLC
      })),
    },
  ];

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      type="candlestick"
      height={350}
    />
  );
}

export default Chart;
