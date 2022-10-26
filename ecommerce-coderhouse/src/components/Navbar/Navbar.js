import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from "./assets/img/logo.png";
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { getDocs, collection, orderBy, query } from 'firebase/firestore'
import { db } from '../../services/firebase';

const Navbar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const collectionRef = query(collection(db, 'categories'), orderBy('order'))

    getDocs(collectionRef).then(response => {
      console.log(response)
      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        const id = doc.id

        return { id, ...data }
      })
      setCategories(categoriesAdapted)
    })

  }, [])

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
            <Link to ='/nosotres'>Nosotres</Link>
            {
              categories.map(cat => {
                <Link key={cat.id} to={`/category/${cat.slug}`}> {cat.label} </Link>
              })
            }            
            <Link to={'/category/libros'}>Libros</Link>
            <Link to ='/contacto'>Contacto</Link>
          </div>
            <CartWidget className="cart-widget" />
      </nav>         
    </div>
  )
}

export default Navbar;