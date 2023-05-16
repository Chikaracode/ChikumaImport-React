import { Button } from "@mui/material"
import "./Cart.css";
import { Link } from "react-router-dom";


const Cart = ({cart, clearCartAlert, deleteProductById, total}) => {

  
  return (
    <div>
      {
        cart.length > 0 ? (<div>
        <div className="cart-container">
        <div className="container-items">
          {
            cart.map( (product) => {
              return <div key={product.id} className="cart-item">
                <img src={product.imagen} alt="" />
                <div className="cart-item-info">
                <h3>{product.titulo}</h3>
                <h4>S/. {product.precio}.00</h4>
                <h4>Unidades: {product.quantity}</h4>
                </div>
                <Button onClick={() => deleteProductById(product.id)} >eliminar</Button>
              </div>
            })
          }
          
    
          </div>
    
          <div className="cart-info">
            <h2>Descripción del Carrito: </h2>
            <h3>Cantidad de productos: </h3>
            <h3>Precio total: {total}</h3>
            <h3>Descuento: </h3>
            <h3>Precio final: </h3>
    
          <div className="btn-cart">
            <Button >Finalizar Compra</Button>
            <Button onClick={clearCartAlert} >vaciar el carrito</Button>
    
          </div>
            <h1>El total del carrito es S/.{total} </h1> 
    
          
    
         
          </div>
        </div>
        </div>
      ): <div>
        <h1>El carrito esta vacío</h1>
        <Link to="/">
        <Button>Añadir productos</Button>
        </Link>
        </div>  }
    </div>
  )
}

export default Cart
