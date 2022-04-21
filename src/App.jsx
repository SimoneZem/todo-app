/*
Obiettivi per prossima settimana: 
devi fare una todo list che abbia i seguenti requisiti 

1) deve avere un form che
 - permetta di inserire il nome di un task e la descrizione. 

2) se premi invia e uno dei due campi del form e' vuoto deve comparire un messaggio d'errore.  

se i campi hanno entrambi un item alla pressione del bottone "add item" deve comparire un item in una lista. 

Questo item dovra' contenere le seguenti info: 

1) Nome del task 
2) descrizione del task ( informazioni inseriti precedentemente nel form ) 
3) una dropdown che permetta il cambio di stato del task. 

Gli stati saranno 3: 

1) done
2) not done 
bonus point
 ---------
3) planned for 

Se premo planned for dovra' comparire un altro form all'interno del task relativo che mi fara' inserire la data di completamento. 
--------------  Fine del bonus point, 

da qui sotto in poi sono di nuovo punti FONDAMENTALI da fare 

1) ogni item dovra' avere la possibilit' di essere cancellato.  
2) ogni item dovra' avere la possiblita' di essere modificato. 

Il tutto dovra' avere un aspetto umano e non una merda.

al cambio dello stato il ticket dovra' cambiare colore dello sfondo.

done verde, not done rosso, planned for giallo.
*/

import React from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
