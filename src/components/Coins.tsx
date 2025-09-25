import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Fetchcoin } from "../api";

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
  color: ${(props) => props.theme.textColor};
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

const Loader = styled.h1`
  text-align: center;
  font-size: 80px;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
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

function Coins() {
  // Corrected useQuery syntax for React Query v4 and newer.
  // It now takes a single object with a `queryKey` and a `queryFn`.
  const { isLoading, data } = useQuery<Typecoin[]>({
    queryKey: ["allCoins"],
    queryFn: Fetchcoin,
  });

  return (
    <Container>
      <Header>
        <Title>코인</Title>
        <button>다크모드</button>
      </Header>
      {isLoading ? (
        <Loader>loading</Loader>
      ) : (
        <Coinlist>
          {data?.slice(0, 100).map((coin) => (
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
