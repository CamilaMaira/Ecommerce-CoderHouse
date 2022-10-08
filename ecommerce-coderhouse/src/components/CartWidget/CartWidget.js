import React from 'react';
import './CartWidget.css';
import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined'

const CartWidget = () => {
  return (
    <div className="cartwidgetmain-container">
      <ShoppingCart />
      <div className="badge">2</div>
    </div>
  )
}

export default CartWidget;
