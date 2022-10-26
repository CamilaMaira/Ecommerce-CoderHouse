import React from 'react';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles.css'
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar />   
        
          <Routes>
          <Route path='/' element={<ItemListContainer />} />
            <Route path='/nosotres' element={<h1>Nosotres</h1>} />
            <Route path='/shop' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/contacto' element={<h1>contacto</h1>} />
            <Route path='*' element={<h1>404 no encontrado</h1>} />
          </Routes>
        </BrowserRouter> 
      </CartProvider>
    </div>
  );
}

export default App;
