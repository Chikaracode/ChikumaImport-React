import ItemDetail from "./ItemDetail"
import { products } from "../../productsMock"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {

const [product, setProduct] = useState({})




const {id} = useParams()
console.log(id)

useEffect(() => {
    let encontrado = products.find( prod => prod.id === +id)
    
        setProduct(encontrado)
    
    
}, [id]);

console.log(product)

  return (
    <div>
      <ItemDetail product={product} />
      
    </div>
  )
}

export default ItemDetailContainer
