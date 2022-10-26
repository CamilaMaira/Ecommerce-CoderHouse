import React from 'react';
import './CartWidget.css';
import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const { getQuantity } = useContext(CartContext)

  return (
    <div className="cartwidgetmain-container">
       <Link to='/cart'>
        <ShoppingCart />
          <div className="badge">
            <p>{getQuantity()}</p>
          </div>
      </Link>
    </div>
  );
}

export default CartWidget

