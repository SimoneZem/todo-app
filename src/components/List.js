import React, { useState } from "react";
import Form from "./Form";

function List() {
  const [activities, setActivities] = useState([]);

  const addAct = (act) => {
    /*la funzione che scriverò di sotto serve sostanzialmente per renderizzare in maniera visivamente non sgradevole un eccesso di spazi all'interno del field dell'attività. Per intenderci
      se dovessi scrivere " p                    o" quello che verrà renderizzato sarà "p o"
      */
    if (!act.text || /^\s*$/.test(act.text)) {
      return;
    }

    const newAct = [act, ...activities];
    setActivities(newAct);
  };

  return (
    <div>
      <h1>Planned Activities</h1>
      <Form onSubmit={addAct} />
    </div>
  );
}

export default List;
