import React from "react"
//componente de visualización
const ItemDetail = ({id, name, price, img, stock, description }) => {
  return (
    <div>
        <img scr={img} alt="" style={{width: 150, height: 150}}/>
        <h3>{name}</h3>
        <p>Precio: {price}</p>
        <p>Detalle: {description}</p>

    </div>
  )
}

export default ItemDetail