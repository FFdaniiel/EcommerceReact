import { Flex, Heading} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory} from './../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { SyncLoader } from "react-spinners";

const ItemListContainer = ({ title }) =>{
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()
  
  useEffect(() => {
    const dataProductos = categoryId ? getProductsByCategory(categoryId) : getProducts()

    setLoading(true)
    dataProductos
      .then(prod => setProducts(prod))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [categoryId])

  return (
    <Flex direction={'column'} justify={'center'} align={'center'} padding={'1rem'}>
      <Heading 
      color={'#fff'} 
      textAlign={'center'} 
      borderBottom={'1px solid #14FFEC'} 
      borderTop={'1px solid #14FFEC'} 
      w={'60%'}
      textTransform={'uppercase'}>{title}</Heading>
      {
        loading ?
        <Flex h={'50vh'} align={'center'}>
          <SyncLoader color='#fff'/>
        </Flex>
        :
        <ItemList products={products} />
      }
    </Flex>
  )
}


export default ItemListContainer