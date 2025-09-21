import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0px auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Coinlist = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.background};
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 20px;
  a {
    align-items: center;
    display: flex;
    padding: 20px;
    transition: color 0.2s ease;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
  font-weight: bold;
`;
interface Typecoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
const Loader = styled.h1`
  text-align: center;
  font-size: 80px;
`;
function Coins() {
  const [loading, setLoading] = useState(true);
  const [coins, seTcoins] = useState<Typecoin[]>([]);
  useEffect(() => {
    (async () => {
      const respense = await fetch("https://api.coinpaprika.com/v1/coins");
      const josn = await respense.json();
      seTcoins(josn.slice(0, 100));
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    })();
  }, []);
  const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
  `;

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {loading ? (
        <Loader>loading</Loader>
      ) : (
        <Coinlist>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/detail/${coin.id}`} state={{ name: coin.name }}>
                <Img
                  src={`https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/16/${coin.name
                    .toLowerCase()
                    .split(" ")
                    .join("-")}.png`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </Coinlist>
      )}
    </Container>
  );
}
export default Coins;
