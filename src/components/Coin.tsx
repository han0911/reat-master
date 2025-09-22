import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

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

// useLocation의 state 타입을 정의합니다.
interface LocationState {
  name: string;
}
interface Typeprice {
  id:;
  name:;
  symbol:;
  rank:;
  is_new:;
  is_active:;
  type:;
  logo:;
  tags:;
  team:;
  description:;
  message:;
  olast_data_atpen_source:;
  started_at:;
  development_status:;
  hardware_wallet:;
  proof_type:;
  org_structure:;
  hash_algorithm:;
  links:;
  links_extended:;
  whitepaper:;
  first_data_at:;
}
interface Typeinfo {}
function Coin() {
  const { coinid } = useParams<{ coinid: string }>();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [price, setPrice] = useState({});
  useEffect(() => {
    (async () => {
      const infodata = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinid}`)
      ).json();
      console.log(infodata);
      const pricedata = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinid}`)
      ).json();
      console.log(pricedata);
      setInfo(infodata);
      setPrice(pricedata);
    })();
  }, []);

  const { state } = useLocation();
  const { name } = state as LocationState;

  console.log(name);

  return (
    <div>
      <Container>
        <Header>
          <Title>{name || "loading"}</Title>
        </Header>
        {loading ? <Loader>loading</Loader> : null}
      </Container>
    </div>
  );
}

export default Coin;
