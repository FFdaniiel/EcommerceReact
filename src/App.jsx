import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import NavBarCategory from './components/NavBarCategory/NavBarCategory'

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <NavBarCategory />
      <ItemListContainer title='Productos' />
    </ChakraProvider>
  )
}

export default App
