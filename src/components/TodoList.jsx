import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="main">
      {todos.map((todo, index) => (
        <TodoCard
          handleDel={handleDelete}
          handleEd={handleEdit}
          key={index}
          index={index}
        >
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
};

export default TodoList;
