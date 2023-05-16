import ItemDetail from "./ItemDetail"
import { products } from "../../productsMock"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import Swal from 'sweetalert2'


const ItemDetailContainer = () => {

const [product, setProduct] = useState({})

 const {agregarAlCarrito, getQuantityById} = useContext(CartContext)

const {id} = useParams()


useEffect(() => {
    let encontrado = products.find( prod => prod.id === +id)
    
        setProduct(encontrado)
    
    
}, [id]);

const onAdd = (cantidad) => {
let data = {
  ...product,
  quantity: cantidad
}

agregarAlCarrito(data)
Swal.fire({
  position: 'center',
  icon: 'success',
  title: `Añadido al carrito ${product.titulo}` ,
  showConfirmButton: false,
  timer: 1500
})

}

let cantidadTotal = getQuantityById(product.id)


  return (
    <div>
      <ItemDetail product={product} onAdd={onAdd} cantidadTotal={cantidadTotal} />
      
    </div>
  )
}

export default ItemDetailContainer
