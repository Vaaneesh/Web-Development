import React from 'react'
let Task=[
    {id:1,name:"Study"},
    {id:2,name:"Cricket"},
    {id:3,name:"Valorant"}
]
const Tasklist = () => {
  return (
    <div>
        <ul>
            {Task.map((ele)=>{return <li>{ele.name}</li>})}
        </ul>
    </div>
  )
}

export default Tasklist
