import React from "react"
import Card from "./Card"

function ListItem(props){

    function DoneImg(props){
        if(props.done){
            return (<img alt="done" src="./assets/winB.png"></img>)
        }else{
            return (<img alt="undone" src="./assets/win.png"></img>)
        }
    }


    return (
        <li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>
                    <button id="done" onClick={()=> props.onDone(props.item)}><DoneImg done={props.item.done}></DoneImg></button>
                    <button id="delete" onClick={()=> {props.onDeleteItem(props.item)}}><img alt="delete" src="./assets/lixeira.png"></img></button>
                </div>
            </Card>
        </li>
    )
}

export default ListItem