import React from "react";
import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import SkeletonItem from "../Skeleton/Skeleton";

const ItemDetailContainer = ({ setCart }) => {
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(true)

  // const navigate = useNavigate()

  const { productId } = useParams()


  // useEffect(() => {
  //   getProductById(productId)
  //   .then(product => {
  //     setProduct(product)
  //   })
  // }, [])

  useEffect(() => {
    getProductById(productId).then(response => {
      setProduct(response)
    }).finally(() => {
      setLoading(false)
    })
  }, [productId])

  if (loading) {
    return <SkeletonItem />
  }

  return (
    //tengo que recibir un objeto
    <div>
      <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer;