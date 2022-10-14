import React from "react"
import { Link, useNavigate } from "react-router-dom"
import './ItemDetail.css'

//componente de visualización
const ItemDetail = ({id, name, price, img, description }) => {

  const navigate = useNavigate()

  return (
    <div  className="itemdetail-container">

        <img src={img} alt={name} className="itemdetail-img" />
        <div className="content">
          <Link to={'/'}><button className="volver-button"> Volver</button></Link>
          <h3 className="itemdetail-title">{name}</h3>
          <p className="itemdetail-detail">{description}</p>
          <p className="itemdetail-price">${price}CLP</p>
         
          <button className="add-button" onClick={() => navigate(`/`)}>Agregar al Carrito</button>
          
        </div>

    </div>
  )
}

export default ItemDetail