import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, name, img, price }) => {
    return (
      <div className="itemcard-maincontainer">
          <picture>
            <img src={img} alt={name} className="item-img"/>
          </picture>
          <h2>{name}</h2>          
          <p className="price">${price} CLP</p>
          <Link className="detail-button" to={`/detail/${id}`}>Ver detalle</Link> 
        </div> 
        )
}

export default Item