import React from 'react';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />   
       
        <Routes>
        <Route path='/' element={<ItemListContainer />} />
          <Route path='/shop' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter> 
     
    </div>
  );
}

export default App;
