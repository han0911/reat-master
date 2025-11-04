import styled from "styled-components";
import { motion } from "framer-motion";
export const Box = styled(motion.div)`
  height: 200px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 28;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  gap: 12px;
`;
