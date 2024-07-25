import React, { createContext, useState } from 'react'

const Context = createContext()

export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([])

  // Agregar al carrito
  const addItem = (productToAdd, quantity) => {
    const newItem = {
      ...productToAdd,
      quantity,
    }
    const isInCart = cart.some((prod) => prod.id === newItem.id)
    if (isInCart) {
      const updateCart = cart.map((prod) =>
        prod.id === newItem.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      )
      setCart(updateCart)
    } else {
      setCart([...cart, newItem])
    }
  }
  // Remover del carrito
  const removeItem = (id) => {
    const updateCart = cart.filter((prod) => prod.id !== id)
    setCart(updateCart)
  }
  // Vaciar carrito
  const clearCart = () => {
    setCart([])
  }
  // visualizar cantidad de productos en carrito
  const getQuantity = () =>{
    const total = cart.reduce((acc, prod) => acc + prod.quantity,0)
    return total;
  }

  // Obtener el valor total de los productos
  const getTotalPrice = () =>{
    const total = cart.reduce((acc, prod)=>acc + prod.precio * prod.quantity, 0)
    return total
  }
  // 
  return (
    <Context.Provider 
    value ={{
      // datos
      cart,
      addItem,
      removeItem,
      clearCart,
      getQuantity,
      getTotalPrice,
      }}>
      {children}
    </Context.Provider>
  )
}

export default Context