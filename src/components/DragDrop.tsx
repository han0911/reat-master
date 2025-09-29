import { DragDropContext, type DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import "../all.css";
import { todoState } from "../atoms";
import Boardcard from "./Board";
const Wrapper = styled.div`
  display: flex;
  max-width: 780px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardcolor};
  border-radius: 5px;
  min-height: 200px;
`;

const Card = styled.div`
  border-radius: 5px;
  background-color: ${(props) => props.theme.cardcolor};
  margin-bottom: 10px;
  min-height: 30px;
  text-align: center;
`;
const C = styled.div`
  background-color: red;
`;
function DragDrop() {
  const onDragend = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // same board movement.
      setTodos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination?.droppableId !== source.droppableId) {
      setTodos((allboard) => {
        const sousecopy = [...allboard[source.droppableId]];
        const target = [...allboard[destination.droppableId]];
        sousecopy.splice(source.index, 1);
        target.splice(destination?.index, 0, draggableId);
        return {
          ...allboard,
          [source.droppableId]: sousecopy,
          [destination.droppableId]: target,
        };
      });
    }
  };

  const [todos, setTodos] = useRecoilState(todoState);
  return (
    <DragDropContext onDragEnd={onDragend}>
      <Wrapper>
        <Boards>
          {Object.keys(todos).map((boardid) => (
            <Boardcard key={boardid} boardid={boardid} todos={todos[boardid]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}
export default DragDrop;
