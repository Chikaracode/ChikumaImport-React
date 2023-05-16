import { Link } from "react-router-dom"
import styles from "./Cart.module.css"
import {CiShoppingCart} from "react-icons/ci"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {

    const {getTotalQuantity} = useContext(CartContext)
   
    let total = getTotalQuantity()

  return (
    <Link to='/Cart'>
    <div className={styles.contenCart}>
      <CiShoppingCart size={50}/>
      <span className={styles.countCart}>{total}</span>
    </div>
    </Link>
  )
}

export default CartWidget
