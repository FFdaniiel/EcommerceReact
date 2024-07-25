import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { CartContextProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import FooterContainer from './components/FooterContainer/FooterContainer'

function App() {
  return (
    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer title="Productos" />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer title="Productos" />}
            />
            <Route
              path="/product/:productId"
              element={<ItemDetailContainer />}
            />
            <Route
              path="/cart"
              element={<Cart/>}
            />
            <Route
              path="/checkout"
              element={<Checkout/>}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      <FooterContainer/>
    </ChakraProvider>
  ) 
}

export default App
