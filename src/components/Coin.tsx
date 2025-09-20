import { useParams } from "react-router-dom";

function Coin() {
  const { coinid } = useParams<{ coinid?: string }>(); 
  return <h1>Coin: {coinid ?? "No Coin"}</h1>;
}

export default Coin;