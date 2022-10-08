import React from 'react';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import './styles.css'

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Navbar />     
        <Routes>
          <ItemListContainer greeting={"Estamos construyendo nuestra web :)"} />
        </Routes>
      </BrowserRouter> */}
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
