import React from "react";
import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams, useNavigate } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])

  const navigate = useNavigate()

  const { productId } = useParams()


  useEffect(() => {
    getProductById(productId)
    .then(product => {
      setProduct(product)
    })
  }, [])

  return (
    //tengo que recibir un objeto
    <div>
      <h2>Detalle de producto</h2>
      <ItemDetail {...product}/>
      <button onClick={() => navigate(`/`)}>Volver</button>
    </div>
  )
}

export default ItemDetailContainer;