import React from 'react';
import { useState, useEffect } from 'react';
import { getProducts, getProductByCategory } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { Skeleton } from '@mui/material';

import './ItemListContainer.css';

//CATEGORÍAS
const ItemListContainer = () => {
  //parte como un array vacio
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    const asyncFunction = categoryId ? getProductByCategory : getProducts
    asyncFunction(categoryId).then(response => {
        setProducts(response)
    }).catch(error => {
        console.log(error)
    }).finally(() => {
        setLoading(false)
    })  
}, [categoryId])

  if(loading){
    return (
      <div>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </div>
    )
  }

  return (
    <div className="itemlist-maincontainer">
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer;