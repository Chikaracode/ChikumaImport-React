import styles from "./ItemList.module.css"

const ItemList = ({saludo}) => {
  return (
    <div  className={styles.text}>
       <h2>{saludo}</h2> 
       
    </div>
  )
}

export default ItemList  
