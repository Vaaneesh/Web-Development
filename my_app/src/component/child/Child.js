import React from 'react'

const Child = (props) => {
  return (
    <div>
      <h1>{props.data}</h1>
      <h2>{props.data2}</h2>
    </div>
  )
}

export default Child
