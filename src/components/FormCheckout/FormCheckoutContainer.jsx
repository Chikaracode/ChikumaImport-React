import React, { useContext, useState } from 'react'
import FormCheckout from './FormCheckout'
import { useFormik } from "formik"
import * as Yup from "yup"
import { CartContext } from '../../context/CartContext'
import {db} from "../../firebaseConfig"
import {addDoc, collection, serverTimestamp, updateDoc, doc} from "firebase/firestore"


const FormCheckoutContainer = () => {

  const {cart, getTotalPrice, clearCart} = useContext(CartContext);

  const [orderId, setOrderId] = useState(null)

const checkoutFn = (data)=>{
  
let total = getTotalPrice()

  let dataOrder = {
    buyer: data,
    items: cart,
    total: total,
    date: serverTimestamp(),
  }
  const ordersCollection = collection(db, "orders")
  addDoc(ordersCollection, dataOrder).then(res => setOrderId(res.id));

 cart.map(product => 
  updateDoc(doc(db, "products ", product.id), {stock: product.stock - product.quantity
  })
 );

clearCart()
};



const {handleSubmit, handleChange, errors} = useFormik({
  initialValues: {
    nombre: "",
    email:"",
    telefono: null
  },
  onSubmit:checkoutFn,

  validationSchema: Yup.object().shape({
    nombre: Yup.string().required("Este campo es obligatorio").min( 3 , "El nombre debe tener al menos 3 caracteres" ),
    email: Yup.string().email("Este campo debe ser un email").required("Este campo es obligatorio"),
    telefono: Yup.string().required("Este campo es obligatorio")
   
  }),
  validateOnChange: false
});



  return (
    <div>
      {
        orderId ? (<h1>Gracias por su compra este es su ID de confirmación: {orderId}</h1>) : (
          <FormCheckout errors={errors} handleSubmit={handleSubmit} handleChange={handleChange} />
        )
      }
    </div>
  )
}

export default FormCheckoutContainer
 