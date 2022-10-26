import React from 'react';
import './CartWidget.css';
import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

  const { getQuantity } = useContext(CartContext)

  return (
    <div className="cartwidgetmain-container">
      <ShoppingCart />
      <div className="badge">
        <p>{getQuantity}</p>
      </div>
    </div>
  );
}

export default CartWidget

