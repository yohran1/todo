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

  function onDeleteItem(item){
    let itensFiltrado = items.filter((itemm) => itemm.id != item.id)
    setItems(itensFiltrado)
  }

  function onDone(item){
    let upDateItems = items.map( itemm => {
      if(itemm.id === item.id){
        itemm.done = !itemm.done
      }
        return itemm 
    })
    setItems(upDateItems)
  }

  return (
    <div className="container">
        <h1>TodoList</h1>
        <Form onAddItem={onAddItem}></Form>
        <List onDone={onDone} onDeleteItem={onDeleteItem} items={items}></List>
    </div>
  );
}

export default App;