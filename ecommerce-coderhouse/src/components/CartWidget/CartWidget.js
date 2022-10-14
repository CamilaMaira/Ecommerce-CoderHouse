import React from 'react';
import './CartWidget.css';
import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined'
import { useState } from 'react';

const CartWidget = () => {

  const [contador, setContador] = useState(0);

  return (
    <div className="cartwidgetmain-container">
      <ShoppingCart onClick={() => setContador(contador + 1)}/>
      <div className="badge">{contador}</div>
    </div>
  )
}

export default CartWidget;

