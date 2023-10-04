//import logo from './logo.svg';
import React from 'react';
import { useState , useCallback} from 'react';
import './App.css';
import Demo from './Components/Demo';
// import AddToDo from './Components/AddToDo';
// import Todo from './Components/Todo';


function App() {

  const [parentdata, setparentdata] = useState(['new parent data']);
  const [childData, setChilddata] = useState(['child data']);

  function addparentdata() {
    setparentdata([...parentdata, 'new parent data'])
  }
        const addChildData= useCallback(()=>{
  setChilddata([...childData, 'new child data added'])
}, [childData])



  return (




    <div className="App">

      <h1>Welcome to React</h1>
      <div>
        <h1>Parent Component Data:</h1>
        {
          parentdata.map((data, index) => {
            return(
              <>
            <p key={index}>{data} {index+1}</p>
         
          </>
          )
        })
      }
        <button onClick={addparentdata}>Add parent Data</button>

      
      </div>
      <Demo childData= {childData} addChildData={addChildData} />








      {/* <AddToDo />
      <Todo /> */}


      {/* //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}



export default App;
