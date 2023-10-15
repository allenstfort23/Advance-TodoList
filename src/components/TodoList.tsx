import React from "react";
import { TodoInterFace } from "../models/Todo";
import "../styles.css";
import SingleTodo from "./SingleTodo";

interface Props {
  todoListItems: TodoInterFace[];
  setTodoItems: React.Dispatch<React.SetStateAction<TodoInterFace[]>>;
}

const TodoList = ({ todoListItems, setTodoItems }: Props) => {
  return (
    <div className="todos">
      {todoListItems.map((todoSingle) => (
        <SingleTodo
          todoObject={todoSingle}
          key={todoSingle.id}
          toDos={todoListItems}
          setTodos={setTodoItems}
        />
      ))}
    </div>
  );
};

export default TodoList;
