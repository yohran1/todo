import React from "react"
import Card from "./Card"

function List(props){

    function DoneImg(props){
        if(props.done){
            return (<img alt="done" src="./assets/winB.png"></img>)
        }else{
            return (<img alt="undone" src="./assets/win.png"></img>)
        }
    }


    return (
        <ul>
          {props.items.map((item) => 
          <li key={item.id}>
            <Card className={item.done ? "done item" : "item"}>
                {item.text}
                <div>
                    <button id="done" onClick={()=> props.onDone(item)}><DoneImg done={item.done}></DoneImg></button>
                    <button id="delete" onClick={()=> {props.onDeleteItem(item)}}><img alt="delete" src="./assets/lixeira.png"></img></button>
                </div>
            </Card>
            </li>)}
        </ul>
    )
}

export default List