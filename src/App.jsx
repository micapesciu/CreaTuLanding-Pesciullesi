import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'

function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo="¡BIENVENIDOS A DALIA! "/>
      <ItemListContainer mensaje="La mejor tienda de arte del país"/>
    </div>
  )

}

export default App