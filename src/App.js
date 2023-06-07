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

  function onItemDeleted(item){
    let filtroItems = items.filter(itemm => itemm.id != item.id)

    setItems(filtroItems)
  }

  return (
    <div className="container">
        <h1>TodoList</h1>
        <Form onAddItem={onAddItem}></Form>
        <List onItemDeleted={onItemDeleted} items={items}></List>
    </div>
  );
}

export default App;
