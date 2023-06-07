import React from "react"

function List(props){
    return (
        <ul>
          {props.items.map((item) => 
          <li key={item.id}>
            {item.text}
            <button><img src="./exemplo.png"></img></button>
            </li>)}
        </ul>
    )
}

export default List