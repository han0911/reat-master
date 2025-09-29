import { Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import type { Itodo } from "../atoms";
import DraggableCard from "./DraggableCard";
// 드래그 중이 아닐 때의 기본 배경색을 설정합니다.
interface Bporps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}
const Board = styled.div<Bporps>`
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 200px;
  flex-grow: 1;
  transition: all 0.3s ease-in-out();
  /* ✅ 수정된 로직: isDraggingOver가 true일 때만 DRAGGING_OVER_COLOR를 사용합니다. */
  background-color: ${(props) =>
    props.isDraggingOver
      ? "rgb(95, 95, 95)"
      : props.isDraggingFromThis
      ? "rgb(95, 95, 95)"
      : "transparent"};
`;

interface TypeBoard {
  todos: Itodo[];
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
  background-color: #adadad;
`;
interface TypeForm {
  newtodo: string;
}
const Form = styled.form`
  width: 100%;
`;
function Boardcard({ todos, boardid }: TypeBoard) {
  const { register, handleSubmit, setValue } = useForm<TypeForm>();
  const onVaild = (todo: TypeForm) => {
    console.log(todo);
    const Newthing = {
      id: Date.now(),
      text: todo,
    };
    setValue("newtodo", "");
  };
  return (
    <Wrapper>
      <Title>{boardid}</Title>
      <Form onSubmit={handleSubmit(onVaild)}>
        <input
          type="text"
          placeholder={`추가하세 ${boardid}여기다가`}
          {...register("newtodo", { required: true })}
        ></input>
      </Form>
      <Droppable droppableId={boardid}>
        {(magic, snapshot) => (
          <Board
            ref={magic.innerRef}
            {...magic.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
          >
            {todos.map((todo, index) => (
              <DraggableCard
                key={todo.id}
                toDoid={todo.id}
                toDotext={todo.text}
                index={index}
              />
            ))}
            {magic.placeholder}
          </Board>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Boardcard;
