import React from 'react'
import './information.css'

const Information = (props) => {

  const closeWidow = (id) => {
    document.querySelector('.information'+id).classList.remove('infoOpen');
    setTimeout(() => {
      document.querySelector('.infoContent'+id).classList.remove('infoContentOpen');
      document.querySelector('.infoContent'+id+' button').classList.remove('closeBTNOpen');
    }, 200);
  }

  return (
    <div className={`information ${props.classN}`}>
      <div className={`infoContent ${props.classNConent}`}>
        <button className='closeBTN' onClick={() => closeWidow(props.id)}>X</button>
        <h2 className='infoContenth2'>{props.title}</h2>
        <p className='infoContentText'>{props.desc}</p>
        <a href={props.href} target='_blank' rel='noreferrer' className='infoContentA'>
          <div className='eleWithArrow'>
          </div>
          <p className='eleHrefPara'>LET'S SEE</p>
        </a>
      </div>
    </div>
  )
}

export default Information