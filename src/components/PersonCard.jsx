import React from 'react'

export const PersonCard = ({name,age,blood,phone,email,src}) => {

  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{blood}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{src}</p>
    </div>
  )
}

 
