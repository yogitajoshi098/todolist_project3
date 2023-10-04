import React, {useState} from 'react';

function ToDoList(){
    const[activity, setActivity]= useState();
    const[listData, SetListData] = useState([]);

    function addActivity(){
// SetListData([...listData, activity])
// console.log(listData)
SetListData((listdata)=>{
const updatedList = [...listdata, activity]
console.log(updatedList);
setActivity('')
return  updatedList;
})
    }
    function removeList(index){
const updatedListData= listData.filter((elem, id)=>{
    return index!=id;
})
SetListData(updatedListData)
    }

    function removeAll(){
        SetListData([])
    }
    
return(
    <>

    <div className='container'>
        <div className='header'>TODO LIST</div>
        <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>{setActivity(e.target.value)}}></input>
        <button onClick={addActivity}>Add</button>
        <p className='List-heading'>Here is your list:{')'}</p>
        {
            listData!=[] && listData.map((data, index)=>{
                return (
                    <>
                    <p key={index}>
                        <div className='listData'>{data}</div>
                        <button className='btn-position' onClick={()=>removeList(index)}>Remove</button>
                        
                    </p>
                    </>
                )
                   
                
   
            })
        }
        {listData.length>=1 && <button style={{width:'fit-content'}}   onClick={removeAll}>Remove All</button>}
        

    </div >
    </>
)
}


export default ToDoList;