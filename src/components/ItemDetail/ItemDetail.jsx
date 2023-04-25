import { Box, Button, Grid } from "@mui/material"
import useCounter from "../../utils/hooks/useCounter"
import styles  from "./ItemDetail.module.css"


const ItemDetail = ({product}) => {
  
  const {counter, increment, decrement} = useCounter(0)

  return (
  <Box  className={styles.content}>
    <Grid container spacing={2}>
      <Grid item xs={7}>
      <img className={styles.img} src={product.imagen} alt="" />
      </Grid>
      <Grid item xs={4} className={styles.content2}>
      <h2>{product.titulo}</h2>
      <h2>{product.descripcion}</h2>
      <h1>S/.{product.precio}</h1>

      <div className={styles.btns}>
       <button className={styles.btn1} onClick={decrement}>-</button>
       <span className={styles.counter}>{counter}</span>
       <button className={styles.btn2} onClick={increment}>+</button>
      </div>
      
      <div className={styles.contentBtn}>
      <Button variant="contained" color="info" >Comprar ahora</Button>
      <Button variant="contained" color="success" >Añadir al carrito</Button>
      </div>

      </Grid>
    </Grid>
  </Box>



 
  )
}

export default ItemDetail

