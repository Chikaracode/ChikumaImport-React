import { Box, Button, Grid } from "@mui/material"
import styles  from "./ItemDetail.module.css"
import CounterContainer from "../Counter/CounterContainer"
import { Link } from "react-router-dom"

const ItemDetail = ({product, onAdd, cantidadTotal}) => {
  
 

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
      {
        product.stock > 0 ?
       <CounterContainer stock={product.stock} onAdd={onAdd} initial={cantidadTotal} /> : <h2>"No hay stock"</h2> 
      }
      <div className={styles.contentBtn}>
        <Link to="/cart">
      <Button variant="contained" color="info" >Comprar ahora</Button>
        </Link>
      <Link to="/">
      <Button variant="contained" color="secondary">Regresar</Button>
      </Link>
      </div>
      
      </Grid>
    </Grid>
  </Box>



 
  )
}

export default ItemDetail

