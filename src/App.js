import React, { useState } from "react"
import Form from "./Form";
import List from "./List";
import Item from "./item"
import './App.css';

function App() {

  const [items, setItems] = useState([])

  function onAddItem(text){

    let item = new Item(text)

    setItems([...items, item])
  }

  return (
    <div className="container">
        <h1>TodoList</h1>
        <Form onAddItem={onAddItem}></Form>
        <List items={items}></List>
    </div>
  );
}

export default App;
