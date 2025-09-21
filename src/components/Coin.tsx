import { useState } from "react";
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
interface Typename {
  name: string;
}
function Coin() {
  const { coinid } = useParams<{ coinid?: string }>();
  const [loading, setLoading] = useState(true);
  const {name} = useLocation<Typename>()
  console.log(location);
  return (
    <div>
      <Container>
        <Header>
          <Title>{coinid} 코인</Title>
        </Header>
        {loading ? <Loader>loading</Loader> : null}
      </Container>
    </div>
  );
}

export default Coin;
