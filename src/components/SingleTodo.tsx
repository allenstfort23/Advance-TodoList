import React from "react";
import { TodoInterFace } from "../models/Todo";
import "../styles.css";

interface Props {
  todoObject: TodoInterFace;
  toDos: TodoInterFace[];
  setTodos: React.Dispatch<React.SetStateAction<TodoInterFace[]>>;
}

const SingleTodo = ({ todoObject, toDos, setTodos }: Props) => {
  const handleDeleteItems: React.MouseEventHandler<HTMLSpanElement> = (
    event
  ) => {
    const updateTodos = toDos.filter((toDos) => toDos.id !== todoObject.id);
    setTodos(updateTodos);
  };
  return (
    <form className="todos_single">
      <span className="todos-signle-text">{todoObject.todoItem}</span>
      <div>
        <span className="icon edit"></span>
        <span className="icon-remove" onClick={handleDeleteItems}>
          X
        </span>
        <span className="icon"></span>
      </div>
    </form>
  );
};

export default SingleTodo;
