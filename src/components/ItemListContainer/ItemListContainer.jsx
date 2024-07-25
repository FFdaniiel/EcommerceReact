import { Flex, Heading} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory} from './../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { SyncLoader } from "react-spinners";
import { db } from '../../config/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = ({ title }) =>{
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()

  useEffect(() => {
    setLoading(true)

    const getData = async () => {
      const coleccion = collection(db, 'productos')
      const queryRef = !categoryId
        ? coleccion
        : query(coleccion, where('categoria', '==', categoryId))
      const response = await getDocs(queryRef)
      const products = response.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id,
        }
        return newItem
      })
      setProducts(products)
      setLoading(false)
    }
    getData()
  }, [categoryId])

  return (
    <Flex direction={'column'} justify={'center'} align={'center'} paddingTop={'1rem'}>
      <Heading 
      color={'#fff'} 
      textAlign={'center'} 
      borderBottom={'1px solid #fff'} 
      borderTop={'1px solid #fff'} 
      w={'90%'}
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