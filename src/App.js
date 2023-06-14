import React, { useState, useEffect } from "react"
import Form from "./components/Form";
import List from "./components/List";
import Item from "./components/item";
import './components/App.css';
import Modal from "./components/Modal";

const SAVE_ITEMS = "saveItems"

function App() {

  const [mostrarModal, setMostrarModal] = useState(false)
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
    onHideModal()
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

  function onHideModal(){
      setMostrarModal(false)
  }

  return (
    <div className="container">
      <header className="header">
      <h1>Tarefas | Metas</h1>
      <button onClick={()=> {setMostrarModal(true)}} className="addButton">+</button>
      </header>
        {/* <Form onAddItem={onAddItem}></Form> */}
        <List onDone={onDone} onDeleteItem={onDeleteItem} items={items}></List>
        <Modal mostrarModal={mostrarModal} onHideModal={onHideModal}><Form onAddItem={onAddItem}></Form></Modal>
    </div>
  );
}

export default App;