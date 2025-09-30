import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
`;

// Box, Circle만 수정
const Box = styled(motion.div)<any>`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 0.5, borderRadius: "100px" },
};
function Ani() {
  return (
    <Wrapper>
      <Box
        whileHover={{ scale: 1.5, rotateZ: 90 }}
        whileTap={{ scale: 0.5, borderRadius: "100px" }}
      />
    </Wrapper>
  );
}

export default Ani;
