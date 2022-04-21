import React, { useState } from "react";

export const Form = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (y) => {
    setInput(y.target.value);
  };

  const handleButton = (x) => {
    x.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleButton}>
      <input
        type="text"
        placeholder="Add an activity"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button">Add Activity</button>
    </form>
  );
};

export default Form;
