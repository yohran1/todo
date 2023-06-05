
import React, { useState } from "react"
import './App.css';

function App() {

  const [text, setText] = useState("")

  function manejarMudanca(event){
      let text = event.target.value
      setText(text)
  }


  return (
    <div className="container">
        <h1>TodoList</h1>
        <form>
          <input onChange={manejarMudanca} type="text" placeholder="Digite o item!"></input>
          <button>Adicionar</button>
        </form>
        <ul>
          <li>{text}</li>
        </ul>
    </div>
  );
}

export default App;
