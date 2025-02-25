import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <a className='card' href={props.data.href} target='_blank' rel='noreferrer'>
        <img src={props.data.logo} alt='logo' className='logoCard' />
    </a>
  )
}

export default Card