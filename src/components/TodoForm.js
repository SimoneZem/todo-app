import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(">>>> ~ file: TodoForm.js ~ line 9 ~ handleChange ~ e", e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        placeholder="Add an activity"
        value={input}
        onChange={handleChange}
        name="text"
        className="todo-input"
      />
      <button onClick={handleSubmit} className="todo-button">
        Add activities
      </button>
    </form>
  );
}

export default TodoForm;
