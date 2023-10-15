import React, { useRef } from "react";
import "../styles.css";

interface Props {
  todoText: string;
  setTodoText: React.Dispatch<React.SetStateAction<string>>;
  handleAddingItem: (e: React.FormEvent) => void;
}

const InputField = ({ todoText, setTodoText, handleAddingItem }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="form-info"
      onSubmit={(e) => {
        handleAddingItem(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        className="input-box"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter Your Item"
      />
      <button className="form-button" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
