import React, { useState } from "react";
// import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { CgEditMarkup } from "react-icons/cg";
import { HiOutlineCheckCircle } from "react-icons/hi";

function Todo({ todos, completeTodo, removeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={todo}
    >
      <div>{todo.text}</div>
      <div className="icons">
        <HiOutlineCheckCircle
          onClick={() => completeTodo(todo.id)}
        ></HiOutlineCheckCircle>

        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <CgEditMarkup
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
