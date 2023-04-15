import styles from "./Cart.module.css"
import {CiShoppingCart} from "react-icons/ci"

const CartWidget = () => {
  return (
    <div className={styles.contenCart}>
      <CiShoppingCart size={50}/>
      <span className={styles.countCart}>0</span>
    </div>
  )
}

export default CartWidget
