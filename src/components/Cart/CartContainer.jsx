import { useContext } from 'react'
import Cart from './Cart'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'

const CartContainer = () => {

  const {cart, clearCart, deleteProductById, getTotalPrice} = useContext(CartContext) 

  let total = getTotalPrice()

  const clearCartAlert = () => {
     
Swal.fire({
  title: 'Quieres eliminar todos los productos del carrito?',
  showDenyButton: true,
  showCancelButton: false,
  confirmButtonText: 'Si',
  denyButtonText: `No`,
}).then((result) => {
  
  if (result.isConfirmed) {
    clearCart()
    Swal.fire('Se vació el carrito', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Genial!', '<h3>Continuemos con la compra</h3>', '')
  }
})
  }

  return (
    <div>
      <Cart total={total} cart={cart} clearCartAlert={clearCartAlert} deleteProductById={deleteProductById} />
    </div>
  )
}

export default CartContainer
