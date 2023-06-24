import React, { useState } from "react"
import { addItem } from "../actions/listAction"
import { useDispatch } from "react-redux"



function Form(props){

  const [text, setText] = useState("")
  const dispatch = useDispatch()

function valorInput(event){
    let valorInput = event.target.value
    setText(valorInput)
}
function addItemEvent(event){
  event.preventDefault()
  if(text){
    dispatch(addItem(text))
    // props.onAddItem(text)
    setText("")
    props.onHideModal()
  }
}

  return(
    <form>
        <input onChange={valorInput} value={text} type="text" placeholder="Digite o Item!"></input>
        <button onClick={addItemEvent}>Adicionar</button>
    </form>
  )
}





// function Form(props){

//   const [text, setText] = useState("")

//     function manejarMudanca(event){
//         let t = event.target.value
//         setText(t)
//     }
  
//     function addItem(event){
//         event.preventDefault()
//         if(text){
//         //   setItems([...items, text])
//           props.onAddItem(text)
//           setText("")
//         }
//     }

//     return(
//         <form >
//           <input onChange={manejarMudanca} value={text} type="text" placeholder="Digite o item!"></input>
//           <button onClick={addItem}>Adicionar</button>
//         </form>
//     )
// }
export default Form