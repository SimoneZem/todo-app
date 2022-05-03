import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { CgEditMarkup } from "react-icons/cg";
import { HiOutlineCheckCircle } from "react-icons/hi";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return (
      <TodoForm edit={edit} onSubmit={submitUpdate} className="edit-row" />
    );
  }

  return todos.map((todo) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={todo}
    >
      <div>{todo.text}</div>
      <div className="icons">
        <HiOutlineCheckCircle onClick={() => completeTodo(todo.id)} />
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
