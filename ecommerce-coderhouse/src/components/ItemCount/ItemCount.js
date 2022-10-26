import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd }) => {

  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
    if(quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  return(
    <div>
      <div>
        <button onClick={decrement}>Menos</button>
        <p>{quantity}</p>
        <button onClick={increment}>Más</button>
      </div>
      <div>
        { quantity > 0 
      ? <button className="Button" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
          : <p>TT</p>
          }
      </div>
    </div>
  )
}

export default ItemCount