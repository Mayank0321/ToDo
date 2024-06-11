import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    "Eat Something",
    "Drink water frequently",
    "Pick up some fruits on your way back",
  ]);
  const [todoValue, setTodoValue] = useState("");
  const persistData = (newList) => {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  };
  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((todo, toDoIndex) => {
      return toDoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  };
  const handleEditTodo = (index) => {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  };
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);
  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handle={handleAddTodos}
      />
      <TodoList
        todos={todos}
        handleDelete={handleDeleteTodo}
        handleEdit={handleEditTodo}
      />
    </>
  );
}

export default App;
