import './Navbar.css';
import logo from "./assets/img/logo.png";
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <div className="navbarmain-container">
      <nav>
        <div className="logo-container">
          <img src = {logo} alt="logo" />
        </div>
          <div>
            <a href="https://no.cl">Inicio</a>
            <a href="https://no.cl">Nosotres</a>
            <a href="https://no.cl">Shop</a>
            <a href="https://no.cl">Contacto</a>
          </div>
            <CartWidget className="cart-widget" />
      </nav>
     
    </div>
  )
}

export default Navbar;