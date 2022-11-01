import React from 'react'
import Visa from '../assets/images/visa.png';


function CreditCard(props) {
  return (
    <div className="container-greetings">
      <img 
      src={Visa} 
      className="imagen-card"
      alt={props.type}

      />
            <p>{props.number}</p>
            <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
            <p>{props.owner}</p>
    </div>
  )
}

export default CreditCard