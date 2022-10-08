import React from 'react';
import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock';

import './ItemListContainer.css';


const ItemListContainer = () => {
  //parte como un array vacio
  const [products, setProducts] = useState([])

  useEffect (() => {
    getProducts()
      .then(products => {
        //lo guardo en el estado
        setProducts(products)
      })
  }, [])

  return (
    <div>
      <h2>Lista de Productos</h2>
      {products.map((prod) => {
        return (
          <div key={prod.id}>
            <img scr={prod.img} alt="" style={{width: 150, height: 150}}/>
            <h3>{prod.name}</h3>
            <p>Precio: {prod.price}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ItemListContainer;