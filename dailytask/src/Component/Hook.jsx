import React from 'react'
import {useState} from 'react'

const Hook = () => {
  const [value , setValue] = useState(15); // Hook

  const addValue= ()=>{ // Add  value:  1
    setValue(value+1)
  }
  
  const remove= ()=>{ // Remove 1
     setValue(value-1)
 
     }
    
  


  return (
    <div style = {{ border: "1px solid black", padding: "50px", margin: "10px"    }}>
      <h1>Hook</h1>

      <h2> Counter  : {value>20? "stop" : value && value<0? "stop" : value }</h2>
      <button onClick = {addValue} style = {{  backgroundColor:"pink" }}> add+1</button> <br></br> <br></br>
      <button onClick = {remove} style = {{  backgroundColor:"pink" }}> Sub-1</button>
      {/* <h3>Counter check: {value}</h3> */}

    </div>
  )
}

export default Hook
