import React, { useRef, useState } from 'react'

function App() {
  // let searchInput="Hello";
  let [searchInput,setSearchInput]= useState("yo");
  let searchref=useRef();
  //setSearchInput is a method/function 
  // let [value,setvalue]=useState(0);
  // let changeValue=()=>{
  //   setvalue(value+1);
  // }
  return (
    <div>
      {/* // <button onClick={changeValue}>Click Me!</button>
      // <h1>{value}</h1> */}
       <input  ref={searchref} type="text" value={searchInput} onChange={(ev)=>{
        setSearchInput(ev.target.value);        
      }}></input>
      <h1>Learning Hooks</h1>
      <h2>{searchInput}</h2>
    </div>
  )
}

export default App
