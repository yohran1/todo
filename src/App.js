
import React, { useState } from "react"
import './App.css';

function App() {

  const [text, setText] = useState("")
  const [items, setItems] = useState([])

  function manejarMudanca(event){
      let t = event.target.value
      setText(t)
  }

  function addItem(event){
      event.preventDefault()
      if(text){
        setItems([...items, text])
        setText("")
      }
  }


  return (
    <div className="container">
        <h1>TodoList</h1>
        <form >
          <input onChange={manejarMudanca} value={text} type="text" placeholder="Digite o item!"></input>
          <button onClick={addItem}>Adicionar</button>
        </form>
        <ul>
          {items.map(item => <li>{item}</li>)}
        </ul>
    </div>
  );
}

export default App;
