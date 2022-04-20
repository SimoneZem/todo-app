import React, { useState } from "react";

export const Form = () => {
  const [input, setInput] = useState("");
  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Add an activity"
        value={input}
        name="text"
        className="todo-input"
      />
      <button className="todo-button">Add Activity</button>
    </form>
  );
};

export default Form;
