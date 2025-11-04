import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import * as S from "../components/test/typebox.style";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  flex-direction: column;
`;
const Grid = styled.div`
  width: 50vw;
  gap: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 28;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  gap: 12px;
`;

function Ani() {
  const [click, setClick] = useState(false);
  const toggle = () => setClick((prev) => !prev);
  const [active, setActive] = useState("");
  return (
    <Wrapper onClick={toggle}>
      <Grid>
        <S.Box layoutId="1" onClick={()=>setActive("1")}></S.Box>
        <S.Box layoutId="2" onClick={()=>setActive("2")}></S.Box>
        <S.Box layoutId="3" onClick={()=>setActive("3")}></S.Box>
        <S.Box layoutId="4" onClick={()=>setActive("4")}></S.Box>
      </Grid>
      <AnimatePresence>
        {click ? (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box layoutId={`${active}`}></Box>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Ani;
