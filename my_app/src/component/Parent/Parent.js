import React from 'react'
import Child from '../child/Child'
let str1="Inside Parent";
let str2="Data provided";
const Parent = () => {
  return (
    <div>
      <Child data={str1} data2={str2}/>
    </div>
  )
}

export default Parent
