import { useQuery } from "@tanstack/react-query";
import type { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { fetchCoinHistory } from "../api";

interface PriceProps {
  coinid?: string;
}

// ✅ 옵션 객체 수정
const chartOptions: ApexOptions = {
  chart: {
    height: 350,
    type: "candlestick",
    toolbar: {
      show: false,
    },
    background: "transparent",
  },
  theme: {
    mode: "dark",
  },
  title: {
    text: "Price Chart",
    align: "left",
  },
  tooltip: {
    enabled: true,
  },
  xaxis: {
    type: "datetime", // ✅ 'category'에서 'datetime'으로 변경
    labels: {
        datetimeUTC: false // 한국 시간 기준으로 표시되도록 설정
    }
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
    labels: {
        formatter: (value) => `$${value.toFixed(2)}` // Y축 숫자 포맷팅
    }
  },
};

function Price({ coinid }: PriceProps) {
  const { isLoading, data } = useQuery({
    queryKey: ["hi", coinid], // key를 좀 더 명확하게 변경
    queryFn: () => fetchCoinHistory(coinid!),
    enabled: !!coinid, // ✅ coinid가 있을 때만 쿼리 실행
  });

  // ✅ 옵셔널 체이닝과 기본값(빈 배열) 설정
  const chartSeries: ApexOptions["series"] = [
    {
      name: "Price",
      data:
        data?.map((d: any) => ({
          x: new Date(d.time_close).getTime(),
          y: [d.open, d.high, d.low, d.close],
        })) ?? [],
    },
  ];

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <ReactApexChart
          series={chartSeries}
          options={chartOptions} // 수정된 옵션 적용
          type="candlestick"
          height={350}
        />
      )}
    </div>
  );
}

function Loading() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>로딩중입니다...</h1>
    </div>
  );
}

export default Price;