import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
  const { cart, removeItem, total, clear } = useContext(CartContext)

  return(
    <div>
     {
         cart.map(prod => (
             <div>
              {prod.name}
              cantidad: {prod.quantity}
              <button onClick={() => removeItem(prod.id)}>Remover</button>
             </div>

         ))
         
     }

    <div>Total: {total}</div>
    <button onClick={() => clear()}>Limpiar carrito</button>
     
    </div>
    
 )
 
 }
 

export default Cart