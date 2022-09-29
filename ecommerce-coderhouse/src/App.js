import './App.css';
import './styles.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"Estamos construyendo nuestra web :)"} />
    </div>
  );
}

export default App;
