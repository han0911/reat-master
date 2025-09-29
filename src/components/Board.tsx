import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: red;
  border-radius: 5px;
  min-height: 200px;
  flex-grow: 1;
`;

interface TypeBoard {
  todos: string[];
  boardid: string;
}

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Wrapper = styled.div`
  width: 300px;
  padding: 20px 10px;
  padding-top: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

function Boardcard({ todos, boardid }: TypeBoard) {
  return (
    <Wrapper>
      <Title>{boardid}</Title>
      <Droppable droppableId={boardid}>
        {(magic, snapshot) => (
          <Board ref={magic.innerRef} {...magic.droppableProps}>
            {todos.map((todo, index) => (
              <DraggableCard key={todo} todo={todo} index={index} />
            ))}
            {magic.placeholder}
          </Board>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Boardcard;
