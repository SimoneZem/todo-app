import React, { useState } from "react";

export const Form = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (y) => {
    setInput(y.target.value);
  };

  /*in questo momento, quando si clicca su add activities la pagina refresha. Non è ciò che vogliamo, 
andremo quindi a creare la funzione che verrò lanciata nel momento in cui verrà premuto il tasto. 
La chiameremo handelButton ( 10.59  preventDefault)
*/
  const handleButton = (x) => {
    x.preventDefault();
    /*
A questo punto aggiungiamo una props al nostro componente perchè andremo ad aggiungere in sehuito altri dati 
negli altri componenti e quindi questo ci consentirà sostanzialmente di accedervi  
  */

    /* props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
  };*/

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

//14.40
