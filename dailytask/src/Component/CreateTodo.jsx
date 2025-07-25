import React from 'react'
function CreateTodo() {
 
  const imageUrl= "user.png";
  const isDisable = true;
  function handleClick (){
    alert("Button clicked!!");
  }

   
  return (
    <>
      
      <img src = {imageUrl} alt = "user Photo "></img>
      <button disable = {isDisable}>Submit</button>

      <button onClick={handleClick}>ClickMe</button>


     </>
  )
}

export default CreateTodo
