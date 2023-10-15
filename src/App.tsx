import React, { FormEvent, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { TodoInterFace } from "./models/Todo";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [toDos, setToDos] = useState<TodoInterFace[]>([]);

  const handleAddingItem = (e: FormEvent) => {
    e.preventDefault();

    if (todo) {
      setToDos([...toDos, { id: Date.now(), todoItem: todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(toDos);
  return (
    <div className="App">
      <span className="heading">Task Manager</span>
      <InputField
        todoText={todo}
        setTodoText={setTodo}
        handleAddingItem={handleAddingItem}
      />
      <TodoList todoListItems={toDos} setTodoItems={setToDos} />
    </div>
  );
}

export default App;
