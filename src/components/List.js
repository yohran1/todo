import React from "react"
import ListItem from "./ListItem"
import Card from "./Card"
import { useSelector } from "react-redux"



function List(props){
  const items = useSelector(state => state)
  

  return (
    <ul>
      {items.map(item => 
      <ListItem key={item.id} item={item} ></ListItem>
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