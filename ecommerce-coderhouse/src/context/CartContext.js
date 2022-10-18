
import React, { useEffect } from "react"
import { createContext, useState } from "react"

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0
  }
)

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  //console.log(totalQuantity)

  console.log(cart)

  useEffect(() => {
    const totalQty = getQuantity()
    setTotalQuantity(totalQty)
 }, [cart])

  const addItem = (productToAdd) => {
    console.log('add Item Ok')
    if(!IsInCart(productToAdd.id)) {
      setCart([...cart, productToAdd])
    } else {
      console.log('ya esta en el carrito')
    }
  }

  const IsInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

  const removeItem = (id) => {
    const cartWithoutItem = cart.filter(prod => prod.id !== id)
    setCart(cartWithoutItem)
  }

  const getQuantity = () => {
    let accu = 0

    cart.forEach(prod => {
      accu += prod.quantity
    })
    
    return accu
  }

  return(
    <CartContext.Provider value={( cart, addItem, removeItem, totalQuantity)}>
      {children}

    </CartContext.Provider>
  
    
    )
}