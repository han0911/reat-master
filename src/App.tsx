import styled from "styled-components";
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

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    textcolor: string;
  }
}

function App() {
  return (
    <Container>
      <h1>안녕하세요</h1>
      <Button>리액트 배우기</Button>
    </Container>
  );
}

export default App;
