import React from 'react'
import UserCard from './UserCard'
import Hook from './Hook'


const Card = () => {
  return (
    <div>
      <h1> This my first component</h1>

      <UserCard name="harshit" Profession="Full Dev"/>
      <UserCard name="mohan" Profession="Full Devops"/>
       <Hook/>
    </div>
   
  )

  
}

export default Card
