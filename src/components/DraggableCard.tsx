import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoState } from "../atoms";
const Card = styled.div`
  border-radius: 5px;
  min-height: 30px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-color: blue;
  flex-grow: 1;
`;
interface Typemap {
  todo: string;
  index: number;
}
function DraaggableCard({ todo, index }: Typemap) {
  const [todos, setTodos] = useRecoilState(todoState);

  return (
    <Draggable draggableId={todo} index={index} key={todo}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {todo}
        </Card>
      )}
    </Draggable>
  );
}
export default React.memo(DraaggableCard);
