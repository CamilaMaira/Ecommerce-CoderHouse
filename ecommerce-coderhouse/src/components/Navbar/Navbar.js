import React from 'react';
import './Navbar.css';
import logo from "./assets/img/logo.png";
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbarmain-container">
      <nav>
        <div className="logo-container">
          <Link to='/'>
          <img src = {logo} alt="logo" />
          </Link>
        </div>
          <div>
            <Link to ='/'>Inicio </Link>
            <Link to ='/'>Nosotres</Link>
            <Link to={'/category/tablet'}>
            <button>Tablet</button>
            </Link>
            <Link to ='/'>Shop</Link>
            <Link to ='/'>Contacto</Link>
          </div>
            <CartWidget className="cart-widget" />
      </nav>
     
    </div>
  )
}

export default Navbar;