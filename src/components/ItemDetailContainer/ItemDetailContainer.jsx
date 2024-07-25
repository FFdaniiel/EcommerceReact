import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductsById } from '../../data/asyncMock'
import { useParams } from 'react-router-dom'
import {  Flex } from '@chakra-ui/react'
import { SyncLoader } from 'react-spinners'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const { productId } = useParams()

  useEffect(() => {
    const getData = async () => {
      const queryRef = doc(db,'productos', productId)
      const response = await getDoc(queryRef)
      const newItem = {
        ...response.data(),
        id: response.id
      }
      setProduct(newItem)
      setLoading(false)
    }
    getData()
  },[] )

  return (
    <Flex justify={'center'} >
      {loading ?
      <Flex  h={'50vh'} align={'center'}><SyncLoader color="#fff"  /></Flex> : <ItemDetail {...product} />}
    </Flex>
  )
}

export default ItemDetailContainer
