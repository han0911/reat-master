import { useState } from "react";
import styled from "styled-components";

interface T {
  bgcolor: string;
  bordercolor?: string;
  text?: string;
}

const Circle = styled.div<T>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.bgcolor};
  border: 1px solid ${(props) => props.bordercolor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const 

export default function C({ bgcolor, bordercolor, text = "기본" }: T) {
    const [counter,setCounter] = useState(1)

  return (
    <Circle
      bgcolor={bgcolor}
      bordercolor={bordercolor ? bordercolor : bgcolor}
      text={text}
    >
      {text}
    </Circle>
  );
}
