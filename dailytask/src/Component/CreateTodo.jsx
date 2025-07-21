import React from 'react'
const CreateTodo = () => {

  const task = 0; // variable 
  const createTask = () => { // function 
    // if (task === 0){
    //   return " No Task available "
    // } else {
    //   return `${task}`;
    // }

    return task === 0 ? " No Task available " : ` Total Task : ${task}`; // Ternery Operator

    
  }
  
  return (              // Functional Componenet me eske return ke uper Java Script ka code likhte hain & return  ke niche HTML me {} ke under Java Script code ko use krte he
    <div>
    <h2> Task:{createTask()} </h2>
    <button> Add Task </button>
      <h1>Hello CreateTodo </h1>
    </div>
  )
}

export default CreateTodo
