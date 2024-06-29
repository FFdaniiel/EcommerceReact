import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductsById } from '../../data/asyncMock'
import { useParams } from 'react-router-dom'
import {  Flex } from '@chakra-ui/react'
import { SyncLoader } from 'react-spinners'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const { productId } = useParams()

  useEffect(() => {
    setLoading(true)

    getProductsById(productId)
      .then((data) => setProduct(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Flex justify={'center'} >
      {loading ?
      <Flex  h={'50vh'} align={'center'}><SyncLoader color="#fff"  /></Flex> : <ItemDetail {...product} />}
    </Flex>
  )
}

export default ItemDetailContainer
