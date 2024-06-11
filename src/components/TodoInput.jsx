import React from "react";

const TodoInput = ({ handle, todoValue, setTodoValue }) => {
  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };
  return (
    <header>
      <input
        type="text"
        placeholder="Enter TODO....."
        onChange={handleChange}
        value={todoValue}
      />
      <button
        onClick={() => {
          handle(todoValue), setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
