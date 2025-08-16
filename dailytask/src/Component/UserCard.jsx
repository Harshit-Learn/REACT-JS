import React from 'react'

const UserCard = (props) => {
const {name , Profession } = props;
  return (
    <div style = {{ border: "1px solid black", padding: "50px", margin: "10px  "   }}>
      <h2>{name}</h2>
      <p>{Profession}</p>
    </div>
  )
}

export default UserCard
