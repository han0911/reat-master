import { useQuery } from "@tanstack/react-query";
import ApexCharts from "react-apexcharts"; // 'react-apexcharts'를 import합니다.
import { useParams } from "react-router-dom";
import { Fetchcoinhistory } from "../api";

// API에서 받아올 데이터의 실제 형식에 맞게 인터페이스를 정의합니다.
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

function Chart() {
  const { coinid } = useParams<{ coinid: string }>();

  // useQuery에 enabled 옵션을 추가하여 coinid가 존재할 때만 쿼리를 실행합니다.
  const { isLoading, data } = useQuery<IHistoricalData[]>({
    queryKey: ["ohlcv", coinid],
    queryFn: () => Fetchcoinhistory(coinid!),
    enabled: !!coinid, // coinid가 유효할 때만 쿼리를 활성화
  });

  return <div>{isLoading ? "로딩 중..." : <ApexCharts />}</div>;
}

export default Chart;
