import { useQuery } from "@tanstack/react-query";
import { Fetchcoinhistory } from "../api";

interface Typeporps {
  coinid?: string;
}

function Chart({ coinid }: Typeporps) {
  const { isLoading, data } = useQuery({
    queryKey: ["han", coinid],
    queryFn: () => Fetchcoinhistory(coinid!),
  });
  return (
    <div>
      <h1>Chart</h1>
    </div>
  );
}
export default Chart;
