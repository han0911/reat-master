import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoState } from "../atoms";
interface TypeC {
  isDragging: boolean;
}
const Card = styled.div<TypeC>`
  border-radius: 5px;
  min-height: 30px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-color: ${(props) => (props.isDragging ? "gray" : "transparent")};
  flex-grow: 1;
`;
interface Typemap {
  toDoid: number;
  toDotext: string;
  index: number;
}
function DraaggableCard({ toDoid, index, toDotext }: Typemap) {
  const [todos, setTodos] = useRecoilState(todoState);

  return (
    <Draggable draggableId={toDoid + ""} index={index} key={toDoid}>
      {(magic, snapshot) => (
        <Card
          ref={magic.innerRef}
          isDragging={snapshot.isDragging}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDotext}
        </Card>
      )}
    </Draggable>
  );
}
export default React.memo(DraaggableCard);
