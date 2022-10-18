import React, { useContext } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import './ItemDetail.css'

//componente de visualización
const ItemDetail = ({id, name, price, img, description, category, stock }) => {

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    const productToAdd = {
      id, name, price, quantity
    }
    
    addItem(productToAdd)
  }

  return (
    <div  className="itemdetail-container">

        <img src={img} alt={name} className="itemdetail-img" />
        <div className="content">
          <Link to={'/'}><button className="volver-button"> Volver</button></Link>
          <h3 className="itemdetail-title">{name}</h3>
          <p className="itemdetail-detail">{description}</p>
          <p className="itemdetail-price">${price}CLP</p>

          <footer>
            <ItemCount onAdd={handleOnAdd} stock={stock} />
          </footer>  
        </div>
    </div>
  )
}

export default ItemDetail