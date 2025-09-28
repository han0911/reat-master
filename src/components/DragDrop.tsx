import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
const Board = styled.div`
  background-color: ${(props) => props.theme.background};
  width: 100%;
  height: 100%; // ✅ 영역 보장
`;
const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Card = styled.div`
  background-color: ${(props) => props.theme.cardcolor};
`;
function DragDrop() {
  const onDragend = () => {};
  return (
    <DragDropContext onDragEnd={onDragend}>
      <Wrapper>
        <Droppable droppableId="one">
          {(magic) => (
            <Board ref={magic.innerRef} {...magic.droppableProps}>
              <Draggable draggableId="first" index={0}>
                {(magic) => (
                  <Card
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                  >
                    hello
                  </Card>
                )}
              </Draggable>
            </Board>
          )}
        </Droppable>
      </Wrapper>
    </DragDropContext>
  );
}
export default DragDrop;
