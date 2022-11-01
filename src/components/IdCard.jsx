import React from 'react'
import '../styles/IdCard.css'

function IdCard(props) {
  console.log(props)
  return (
    <div className='container-card'>
      
      <img 
        src= {props.picture}
        className="imagen-card"
        alt="profile"
      />
      
      <div className='contenedor-text-card'>
        <p><strong>First name:</strong> {props.lastName}</p>
        <p><strong>Last name:</strong> {props.firstName}</p>
        <p><strong>Gender:</strong> {props.gender}</p>
        <p><strong>Height:</strong> {props.height}</p>
        <p><strong>Birth:</strong> {props.birth.toLocaleDateString()}</p>
      </div>
      
    </div>
  )
}

export default IdCard