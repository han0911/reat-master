import { useRef } from "react";
import { DragDropContext, type DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import "../all.css";
import { todoState } from "../atoms";
import Boardcard from "./Board";
import type { Itodo } from "../atoms";
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

function DragDrop() {
  const onDragend = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // same board movement.
      setTodos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const task = boardCopy[source.index]
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, task);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination?.droppableId !== source.droppableId) {
      setTodos((allboard) => {
        const sousecopy = [...allboard[source.droppableId]];
        const copy = sousecopy[source.index]
        const target = [...allboard[destination.droppableId]];
        sousecopy.splice(source.index, 1);
        target.splice(destination?.index, 0, copy);
        return {
          ...allboard,
          [source.droppableId]: sousecopy,
          [destination.droppableId]: target,
        };
      });
    }
  };

  const [todos, setTodos] = useRecoilState(todoState);
  const onClick = () => {
    inputRef.current?.focus()
  };
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <DragDropContext onDragEnd={onDragend}>
      <Wrapper>
        <input ref={inputRef} placeholder="hi"></input>
        <button onClick={onClick}>click</button>
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
