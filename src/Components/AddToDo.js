import {React, useState} from 'react';
import {useDispatch} from 'react-redux';
import { addToDo } from '../Features/ToDoSlice';

function AddToDo (){
const[input, setInput] = useState('');
const dispatch = useDispatch();
function handlesubmit(event){
event.preventDefault();
dispatch(addToDo(input))
setInput('')
}

return(
    <>
    <form onSubmit={handlesubmit}>
        <input type='text'
        placeholder='Enter a Todo...'
        value={input}
        onChange={(e)=>setInput(e.target.value)}/>
        <button type='Submit' style={{width:'fit-content'}} >
Add ToDo
        </button>

    </form>
    </>
)
}


export default AddToDo;

