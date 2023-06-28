import React, { useState } from "react"
import Form from "./components/Form";
import List from "./components/List";
import './components/App.css';
import Modal from "./components/Modal";

import { legacy_createStore } from "redux"
import { Provider } from "react-redux"
import listReducer from "./reducers/listReducer";

const SAVED_ITEM = "saveItems"

function persistirState(state){
  localStorage.setItem(SAVED_ITEM, JSON.stringify(state))
}

function carregarState(){
  const atualState = localStorage.getItem(SAVED_ITEM)
  if(atualState){
    return JSON.parse(atualState)
  }else{
    return []
  }
}
const store = legacy_createStore(listReducer, carregarState())

store.subscribe(()=>{
  persistirState(store.getState())
})


function App(){

  const [mostrarModal, setMostrarModal] = useState(false)

  function onHideModal(){
    setMostrarModal(false)
  }

  return (
    <div className="container">
      <Provider store={store}>
        <header className="header"><h1>TodoList</h1> <button onClick={()=>{setMostrarModal(true)}} className="addButton">+</button> </header>
        <Modal mostrarModal={mostrarModal} onHideModal={onHideModal}><Form onHideModal={onHideModal}></Form></Modal>
        <List  ></List>
      </Provider>
    </div>
  )
}












// const SAVE_ITEMS = "saveItems"

// function App() {

//   const [mostrarModal, setMostrarModal] = useState(false)
//   const [items, setItems] = useState([])

//   useEffect(()=>{
//     let saveItems = JSON.parse(localStorage.getItem(SAVE_ITEMS))
//     if(saveItems){
//       setItems(saveItems)
//     }
//   },[])

//   useEffect(()=>{
//     localStorage.setItem(SAVE_ITEMS, JSON.stringify(items))
//   },[items])

//   function onAddItem(text){
//     let item = new Item(text)
//     setItems([...items, item])
//     onHideModal()
//   }

//   function onDeleteItem(item){
//     let itensFiltrado = items.filter((itemm) => itemm.id != item.id)
//     setItems(itensFiltrado)
//   }

//   function onDone(item){
//     let upDateItems = items.map( itemm => {
//       if(itemm.id === item.id){
//         itemm.done = !itemm.done
//       }
//         return itemm 
//     })
//     setItems(upDateItems)
//   }

//   function onHideModal(){
//       setMostrarModal(false)
//   }

//   return (
//     <div className="container">
//       <header className="header">
//       <h1>Tarefas | Metas</h1>
//       <button onClick={()=> {setMostrarModal(true)}} className="addButton">+</button>
//       </header>
//         {/* <Form onAddItem={onAddItem}></Form> */}
//         <List onDone={onDone} onDeleteItem={onDeleteItem} items={items}></List>
//         <Modal mostrarModal={mostrarModal} onHideModal={onHideModal}><Form onAddItem={onAddItem}></Form></Modal>
//     </div>
//   );
// }

export default App;