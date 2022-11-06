import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
import SubmitForm from "../Form/Form"
import { ordersFirestore } from "../../services/firestore/Orders.js"

const Checkout = () => {

  //const [loading, setLoading] = useState(false)

  const { clear } = useContext(CartContext)

  const [personalData, setPersonalData] = useState(false)

  const [datos, setDatos] = useState({})

  const fullData = (name, phone, email, adress) => {
    setDatos({name, phone, email, adress})
    setPersonalData(true)
  }

  const navigate = useNavigate()

  const { createOrder} = ordersFirestore()

  const getOrder = () => {
    createOrder(datos).then(response => {
      if(response.result === 'orderCreated') {
        clear()
        setTimeout(() => {
          navigate('/')
        }, 4000)
      }
    })
    } 

    return (
      <div>
        <h2>Checkout</h2>
        <h2>Componente Formulario</h2>
        <SubmitForm fullData={fullData} />
        { personalData 
        ? <button onClick={getOrder}>Finalizar Compra</button>
        : ""
      }
        
      </div>
    )

  } 

export default Checkout 