import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    ToDos: [{id:1, text:''}]
}

export const ToDoSlice = createSlice({
    name: 'ToDo',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            const ToDo =  {
                id: nanoid(),
                    text: action.payload,
            }
            state.ToDos.push(ToDo)
        },
        removeToDo:(state, action)=>{
        state.ToDos = state.ToDos.filter((todo)=>{
           return  todo.id!== action.payload
        })
        }
        
    }

})


export const {addToDo, removeToDo}= ToDoSlice.actions;
export default ToDoSlice.reducer;