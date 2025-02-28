import React from 'react'
import './card.css'
import Information from './information'

const Card = (props) => {
  const openInfo = (id) => {
    document.querySelector('.information'+id).classList.add('infoOpen');
    setTimeout(() => {
      document.querySelector('.infoContent'+id).classList.add('infoContentOpen');
      document.querySelector('.infoContent'+id+' button').classList.add('closeBTNOpen');
    }, 200);
  }
  return (
    <>
      <Information id={props.id} classNConent={'infoContent'+props.id} classN={'information'+props.id} href={props.data.href} desc={props.data.description} title={props.data.title} />
      <button className='card' onClick={() => openInfo(props.id)}>
          <img src={'./'+props.data.image} alt='app' className='imageCard' />
          <img src={props.data.logo} alt='logo' className='logoCard' />
          <p className='cardText'>{props.data.title}</p>
          <p className='cardText' style={{color: '#EA5600'}}>0{props.id+1}</p>
      </button>
    </>
  )
}

export default Card
