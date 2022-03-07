import React from "react";
import "./List.css";

const List = (props) => {
  return (
    <div>
      <ul className="list">
        {props.lists.map((list) => (
          <>
            <li key={list.id}>
              {list.name}
              <button
                className="removeBtn"
                onClick={() => props.onDeleteTodo(list.id)}
              >
                Remove
              </button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default List;
