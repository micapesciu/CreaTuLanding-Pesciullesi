import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout.jsx'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer saludo="Bienvenidos a Dalia" />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:idCategory' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App