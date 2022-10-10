import React from "react"
import './ItemDetail.css'

//componente de visualización
const ItemDetail = ({id, name, price, img, description }) => {
  return (
    <div  className="itemdetail-container">
        <picture>
          <img className="itemdetail-img "scr={img} alt=""/>
        </picture>
        <div className="content">
          <h3 className="itemdetail-title">{name}</h3>
          <p className="itemdetail-detail">{description}</p>
          <p className="itemdetail-price">Precio: {price}</p>
        </div>

    </div>
  )
}

export default ItemDetail