import React, { useState } from 'react'

function App() {
  // let searchInput="Hello";
  let [searchInput,setSearchInput]= useState("yo");
  return (
    <div>
      <input type="text" value={searchInput} onChange={(ev)=>{
        searchInput=ev.target.value;
      }}></input>
      <h1>Learning Hooks</h1>
      <h2>{searchInput}</h2>
    </div>
  )
}

export default App
