// App.jsx
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemContainer';
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a nuestra tienda de smartphones" />
    </>
  );
}

export default App;