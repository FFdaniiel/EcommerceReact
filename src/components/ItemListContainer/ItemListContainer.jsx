import { Flex, Heading} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { getProducts } from './../../data/asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ title }) =>{
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
    .then(response =>{
      setProducts(response)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <Flex direction={'column'} justify={'center'} align={'center'}>
      <Heading 
      color={'#fff'} 
      textAlign={'center'} 
      borderBottom={'1px solid #14FFEC'} 
      borderTop={'1px solid #14FFEC'} 
      w={'50%'}
      textTransform={'uppercase'}>{title}</Heading>

      <ItemList products={products} />
    </Flex>
  )
}


export default ItemListContainer