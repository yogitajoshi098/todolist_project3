import {useSelector} from 'react-redux'
import React from 'react'
import { useDispatch } from 'react-redux';
import { removeToDo } from '../Features/ToDoSlice';

function Todo(){
    const mystate = useSelector(state=>state.ToDos);
    const dispatch= useDispatch()
    function removehandler(){
        dispatch(removeToDo(mystate.id))
    }
    console.log(mystate)
    return(
        <>
        <div>
            <ul>
                {mystate.map((todo)=>{
return (
    <li key={todo.id} style={{listStyle:'none'}} >
        <div  style={{display:'flex', justifyContent:'space-between'}} >{todo.text}   </div>
    </li>
)
                })}
            </ul>
            
            <button onClick={removehandler} style={{width:'fit-content'}}  >Remove</button>
            </div>
            
            </>
    )
}


export default Todo