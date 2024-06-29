import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBarCategory from './components/NavBarCategory/NavBarCategory'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <NavBar />
      <NavBarCategory />
        <Routes>
          <Route path='/' element={<ItemListContainer title='Productos'/>}  />
          <Route path='/category/:categoryId' element={<ItemListContainer title='Productos' />} />
          <Route path='/product/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  ) 
}

export default App
