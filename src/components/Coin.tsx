import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import { Fetchcoininfo, FetchcoinTicker } from "../api";
import Chart from "./Chart";
import Price from "./Price";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface LocationState {
  name: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      // ... (다른 속성들)
    };
  };
}

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;
interface Typetheme{
    dark:boolean,
    setDark:React.Dispatch<React.SetStateAction<boolean>>
}
function Coin({dark,setDark}:Typetheme) {
  const pricematch = useMatch(`/detail/:coinid/price`);
  const chartmatch = useMatch(`/detail/:coinid/chart`);
  console.log(pricematch);
  const { coinid } = useParams<{ coinid: string }>();
  const { state } = useLocation() as { state: LocationState | null };
  //   const [loading, setLoading] = useState(true);
  //   const [info, setInfo] = useState<InfoData>();
  //   const [price, setPrice] = useState<PriceData>();
  const priceMatch = useMatch("/detail/:coinid/price");
  const chartMatch = useMatch("/detail/:coinid/chart");
  const { isLoading: infoLoading, data: infodata } = useQuery<InfoData>({
    queryKey: ["info", coinid],
    queryFn: () => Fetchcoininfo(coinid!),
  });
  const { isLoading: trickersLoading, data: trickersdata } =
    useQuery<PriceData>({
      queryKey: ["ticker", coinid],
      queryFn: () => FetchcoinTicker(coinid!),
      refetchInterval: 5000,
    });

  //   useEffect(() => {
  //     (async () => {
  //       const infoData = await (
  //         await fetch(`https://api.coinpaprika.com/v1/coins/${coinid}`)
  //       ).json();
  //       const priceData = await (
  //         await fetch(`https://api.coinpaprika.com/v1/tickers/${coinid}`)
  //       ).json();
  //       setInfo(infoData);
  //       setPrice(priceData);
  //       setLoading(false);
  //     })();
  //   }, [coinid]);
  const loading = infoLoading || trickersLoading;
  return (
    <Container>
      <Helmet>
        <title>
          {state?.name ? state.name : loading ? "Loading..." : infodata?.name}
        </title>
      </Helmet>
      <Header>
        <Title>
          {state?.name ? state.name : loading ? "Loading..." : infodata?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infodata?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infodata?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price:</span>
              <span>
                {trickersdata?.quotes.USD.price.toFixed(2) ? "Yes" : "No"}
              </span>
            </OverviewItem>
          </Overview>
          <Description>{infodata?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{trickersdata?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{trickersdata?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/detail/${coinid}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/detail/${coinid}/price`}>Price</Link>
            </Tab>
          </Tabs>

          <Routes>
            <Route path="price" element={<Price coinid={coinid} />} />
            <Route path="chart" element={<Chart coinid={coinid} dark={dark} setDark={setDark} />} />
          </Routes>
        </>
      )}
    </Container>
  );
}

export default Coin;
