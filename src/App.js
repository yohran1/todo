import React, { useState, useEffect } from "react"
import Form from "./components/Form";
import List from "./components/List";
import Item from "./components/item";
import './components/App.css';

const SAVE_ITEMS = "saveItems"

function App() {

  const [items, setItems] = useState([])

  useEffect(()=>{
    let saveItems = JSON.parse(localStorage.getItem(SAVE_ITEMS))
    if(saveItems){
      setItems(saveItems)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(SAVE_ITEMS, JSON.stringify(items))
  },[items])

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