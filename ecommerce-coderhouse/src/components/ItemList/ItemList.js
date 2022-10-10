import React from 'react'
import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({products, setPage}) => {
  return (
    <div className='item-maincontainer'>
      {products.map(prod =>
        <Item key={prod.id} {...prod} setPage={setPage}/>)}
    </div>
  )

}

export default ItemList