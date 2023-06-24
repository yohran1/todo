import React from "react"
import Card from "./Card"
import { useDispatch } from "react-redux"
import { mundancaDone, deleteItem } from "../actions/listAction"

function DoneImg(props){
  if(props.done){
    return ( <img id="done" alt="done" src="./assets/winB.png"></img> )
  }else{
    return ( <img id="undone" alt="undone" src="./assets/win.png"></img> )
  }
}


function ListItem(props){

  const dispatch = useDispatch()

    return (
        <li>
        <Card className={props.item.done? "done item" : "item"}>
          {props.item.text}
          <div>
            <button id="done" onClick={()=> {dispatch(mundancaDone(props.item.id))}}><DoneImg done={props.item.done}></DoneImg></button>
            <button id="delete" onClick={()=> {dispatch(deleteItem(props.item.id))}}><img alt="delete" src="./assets/lixeira.png"></img></button>
          </div>
        </Card>
        </li>
    )
}











// function ListItem(props){

//     function DoneImg(props){
//         if(props.done){
//             return (<img alt="done" src="./assets/winB.png"></img>)
//         }else{
//             return (<img alt="undone" src="./assets/win.png"></img>)
//         }
//     }


//     return (
//         <li>
//             <Card className={props.item.done ? "done item" : "item"}>
//                 {props.item.text}
//                 <div>
//                     <button id="done" onClick={()=> props.onDone(props.item)}><DoneImg done={props.item.done}></DoneImg></button>
//                     <button id="delete" onClick={()=> {props.onDeleteItem(props.item)}}><img alt="delete" src="./assets/lixeira.png"></img></button>
//                 </div>
//             </Card>
//         </li>
//     )
// }

export default ListItem