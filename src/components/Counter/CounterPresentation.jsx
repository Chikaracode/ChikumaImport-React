import { Button } from "@mui/material"
import styles from "./Counter.module.css"

const CounterPresentation = (
    {sumar, 
    counter, 
    restar,
    onAdd
}) => {
  return (
    <div className={styles.contador}>
    <Button variant="contained" onClick={sumar}>sumar</Button> 
      <span>{counter}</span>
    <Button variant="contained" onClick={restar}>restar</Button>
    <Button onClick={() => onAdd(counter)} variant="contained" color="success" >Añadir al carrito</Button>
    </div>
  )
}

export default CounterPresentation
