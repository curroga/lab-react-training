import React from 'react'

function BoxColor(props) {

  return ( //! porque en la clase container-greetings no he tenido que importar para que funcione?
    <div className='container-greetings' style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
        <p>rgb({props.r}, {props.g}, {props.b})</p>
      </div>
  )
}

export default BoxColor