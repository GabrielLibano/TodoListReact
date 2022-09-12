import React from "react"
import Card from "./Card"
function List(props){

    function DoneImg(props){
        if(props.done){
            return (<img src="./assets/checked.png" width="20px"></img>)
        }else{
            return(<img src="./assets/unchecked.png" width="20px"></img>)
        }
    }

    return( <ul >
        {props.items.map(item=><li key={item.id}>
            <Card className={item.done ? "done item":"item"} >
            {item.text}
            <div>
                <button onClick={()=>{props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
                <button onClick={()=>{props.onItemDeleted(item)}}><img src="./assets/trash.png" width="20px"></img></button>
            </div>
            </Card>
        </li>)}
    </ul>)
}
export default List