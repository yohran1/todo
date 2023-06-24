import React from "react"
import ListItem from "./ListItem"
import Card from "./Card"



function List(props){

  

  return (
    <ul>
      {props.items.map(item => 
      <ListItem key={item.id} item={item} onDone={props.onDone} deleteItem={props.deleteItem}></ListItem>
      )}
    </ul>
  )
}





// function List(props){

//     return (
//         <ul>
//           {props.items.map((item) => 
//             <ListItem key={item.id} item={item} onDone={props.onDone} onDeleteItem={props.onDeleteItem} ></ListItem>
//           )}
//         </ul>
//     )
// }

export default List