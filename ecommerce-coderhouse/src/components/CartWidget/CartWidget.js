import React from 'react';
import './CartWidget.css';
import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)
  //const quantity = getQuantity()

  return (
    <div className="cartwidgetmain-container">
      <ShoppingCart />
      <div className="badge">
        <p>{totalQuantity}</p>
      </div>
    </div>
  );
}

export default CartWidget

