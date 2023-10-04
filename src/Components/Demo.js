import React , {memo}from 'react'
 function Demo({childData, addChildData}) {
    console.log('Demo component is called..')
  return (
    <div>
      {
        childData.map((data,index)=>{
<p key={index}>{data} {index +1}</p>
        })
      }
      <button onClick={addChildData}>add child data</button>
    </div>
  )
}


export default memo(Demo);
