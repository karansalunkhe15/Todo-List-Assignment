import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (utodo) => {
    setTodos((prevTodoList) => {
      return [...prevTodoList, { name: utodo, id: Math.random().toString() }];
    });
  };

  const deleteTodoHandler = (todoId) => {
    setTodos((prevTodoList) => {
      const updatedTodos = prevTodoList.filter((todo) => todo.id !== todoId);
      return setTodos(updatedTodos);
    });
  };

  return (
    <div className="App">
      <h1 className="head">Todo List App.</h1>
      <AddTodo onTodo={addTodoHandler} />
      <List lists={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
