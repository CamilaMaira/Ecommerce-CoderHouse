import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase/index"
import { useNavigate } from "react-router-dom"

const Checkout = () => {

  const [loading, setLoading] = useState(false)
  const { cart, total, clear } = useContext(CartContext)

  const navigate = useNavigate()


  const createOrder = async () => {
    setLoading(true)
    try {
      const objOrder = {
        buyer: {
          name: 'cami',
          phone: '12345',
          mail: 'cami@camila.cl'
        },
        items: cart,
        total
      }

      const batch = writeBatch(db)

      const outStock = []

      const ids = cart.map(prod => prod.id)
      const productsRef = collection(db, 'products')

      const productsAddedFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
      const { docs } = productsAddedFirestore

      docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock

        const productAddedToCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productAddedToCart?.quantity 

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity})
        } else {
          outStock.push({ id: doc.id, ...dataDoc})
        }
      })

      if(outStock.length === 0) {
        await batch.commit()

        const orderRef = collection(db, 'orders')
        const orderAdded = await addDoc(orderRef, objOrder)

        clear()
        setTimeout(() => {
          navigate('/')
        }, 4000)
        

        console.log(`el id de tu orden es: ${orderAdded.id}`)
      } else {
        console.log('Producto sin de stock :(')
      }

    } catch(error) {
      console.log(error)
  } finally {
    setLoading(false)
  }
}

if (loading) {
  return <h1>Generando ordend de compra :D</h1>

}


  return (
    <div>
      <h1>Checkout</h1>
      <h2>Componente Formulario</h2>
      <button onClick={createOrder}>Finalizar Compra</button>
    </div>
  )

}

export default Checkout 