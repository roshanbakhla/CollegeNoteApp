import React from 'react'
import "./style.scss"
const Card = ({name,sem}) => {
  return (
    <div className='card'>
        <div className="name">{name}</div>
        <div className="sem">{sem}</div>
    </div>
  )
}

export default Card