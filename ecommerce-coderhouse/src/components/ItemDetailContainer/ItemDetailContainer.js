import React from "react";
import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    getProductById('1')
    .then(product => {
      setProduct(product)
    })
  }, [])

  return (
    //tengo que recibir un objeto
    <div>
      <h2>Detalle de producto</h2>
      <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer;