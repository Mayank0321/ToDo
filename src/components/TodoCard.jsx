import React from "react";

const TodoCard = ({ children, handleDel, index, handleEd }) => {
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={()=>handleEd(index)}>
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={()=>handleDel(index)}>
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
