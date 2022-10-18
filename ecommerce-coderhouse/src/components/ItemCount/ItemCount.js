import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {

  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
    for (var i = 0; i < 5; i++) {
      setQuantity(valorPrev => valorPrev + 1 )
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
        <button onClick={() => onAdd(quantity)}>Agregar al Carrito</button>
      </div>
    </div>
  )
}

export default ItemCount