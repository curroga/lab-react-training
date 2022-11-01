import React from 'react'
import '../styles/Greetings.css'

function Random(props) {
  let randomNum = Math.random();
  console.log(randomNum)

  let num = Math.floor(randomNum *((props.max)))
  
  return (
    <div className='container-greetings'>
      <p>Random value between {props.min} and {props.max}: {num+props.min}</p>
      </div>
  )
}

export default Random