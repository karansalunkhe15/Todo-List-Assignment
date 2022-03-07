import React, { useState } from "react";
import "./AddTodo.css";

const AddTodo = (props) => {
  const [input, setInput] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) {
      return;
    }
    props.onTodo(input);
    setInput("");
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn1">ADD</button>
      </form>
    </div>
  );
};

export default AddTodo;
