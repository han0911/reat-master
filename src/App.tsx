import styled from "styled-components";
import C from "../src/Circle";
import "./App.css";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textcolor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
`;
type AppProps = {
  D: boolean;
  setD: React.Dispatch<React.SetStateAction<boolean>>;
};
declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    textcolor: string;
  }
}

function App({ D, setD }: AppProps) {
  return (
    <Container>
      <h1>{D ? "다크 모드" : "라이트 모드"}</h1>
      <Button onClick={() => setD((prev) => !prev)}>
        {D ? "라이트 모드로" : "다크 모드로"}
      </Button>
      <C bgcolor={"teal"} bordercolor="black" text="한석주"/>
      <C bgcolor={"red"}/>
    </Container>
  );
}

export default App;
