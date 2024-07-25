import {useContext, useEffect, useState} from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Flex,
    Input,
    Heading,
    Button,
  } from '@chakra-ui/react'
import { addDoc, collection, doc, getDoc, Timestamp, updateDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Context from '../../context/CartContext'
import Swal from 'sweetalert2'
import './Checkout.css'
import { useNavigate } from 'react-router-dom'
function Checkout() {
  const navigate = useNavigate()

    const {cart, getTotalPrice, clearCart} = useContext(Context)
    const [user,setUser] = useState({
        name:'',
        email:'',
        repeatedEmail:'',
        phone:'',
    })
    const [error, setError] = useState({})
    const updateUser = (e) =>{
        setUser(user => ({
            ...user,
            [e.target.name]: e.target.value
        }))
    }
    const getOrder = async()=>{
      if (!validateForm()) {
        return
      }
      if (cart.length === 0) {
        Swal.fire({
          title: "El carrito está vació.",
          icon: "error",
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false
        });
        navigate('/')
        return
      }
      const orderCollection = collection(db,'orders')
      try {
        const order = {
          buyer: user,
          cart: cart,
          total: getTotalPrice(),
          fechaDeCompra: Timestamp.now()
        }
        for(const item of cart){
          const productRef = doc(db,'productos', item.id)
          const productDoc = await getDoc(productRef)
          const currentStock = productDoc.data().stock

          updateDoc(productRef,{stock:currentStock - item.quantity})
        }
        const orderRef = await addDoc(orderCollection, order)
        clearCart()
        Swal.fire({
          icon:'success',
          title: "Compra realizada con éxito",
          html: `El numero de order es: <b>${orderRef.id}</b>`,
          timer: 3500,
          timerProgressBar: true,
          didOpen: () =>{
            Swal.showLoading();
          }
        })
        setTimeout(() => {
          navigate('/')
        }, 3500);
      } catch (error) {
        console.log(error)
      }
    }
    // 
    const validateForm = () =>{
      const errors = {}
      if(!user.name){ 
          errors.name = 'Tenes que agregar un nombre'
      }else if(user.name.length < 3 || user.name.length > 15){
        errors.name = 'El nombre debe tener al menos 3 caracteres y un máximo de 15'
      }
      // Email
      if (!user.email) {
        errors.email = 'Tenes que ingresar un email'
      }else if(!/\S+@+\S+\.+\S+/.test(user.email)){
        errors.email = 'Tenes que ingresar un email valido'
      }
      // repeatedEmail
      if (user.repeatedEmail !== user.email) {
        errors.repeatedEmail = 'Los Emails no coinciden'
      }else if(!user.repeatedEmail){
        errors.repeatedEmail = 'Tenes que repetir el email'
      }
      // Phone
      if (!user.phone) {
        errors.phone = 'Tenes que ingresar un teléfono'
      }else if(user.phone.length < 10 || user.phone.length >10){
        errors.phone = 'El numero de teléfono no es correcto'
      }

      setError(errors)
      return Object.keys(errors).length === 0
  }
  return (
    <Flex direction={'column'} justify={'center'} align={'center'} w={'40%'} color={'white'} margin={'1rem'}>
      <Heading>Datos de facturación</Heading>
      <FormControl isInvalid={Object.keys(error).length > 0} isRequired > 
        <FormLabel>Nombre: </FormLabel>
        <Input type='text' name='name' color={'white'} onChange={updateUser}/>
        <FormErrorMessage>{error.name}</FormErrorMessage>
        {/* fin */}
        <FormLabel>Email: </FormLabel>
        <Input type='email' name='email' color={'white'} onChange={updateUser}/>
        <FormErrorMessage>{error.email}</FormErrorMessage>

        {/* fin */}
        <FormLabel>Repetir Email: </FormLabel>
        <Input type='email' name='repeatedEmail' color={'white'} onChange={updateUser}/>
        <FormErrorMessage>{error.repeatedEmail}</FormErrorMessage>

        {/* fin */}
        <FormLabel>Teléfono:</FormLabel>
        <Input type='number' name='phone' color={'white'} onChange={updateUser}/>
        <FormErrorMessage mb={2}>{error.phone}</FormErrorMessage>

        {/* fin */}
        <Button onClick={getOrder} mt={2}>Finalizar Compra</Button>
      </FormControl>
    </Flex>
    
  )
}
 
export default Checkout
