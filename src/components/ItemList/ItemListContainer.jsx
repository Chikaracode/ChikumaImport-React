import ItemList from "./ItemList"
import { products } from "../../productsMock"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [ items, setItems ] = useState([])

  const {nombreCategoria} = useParams()



  useEffect( ()=>{

    const productsFiltered = products.filter( prod => prod.categoria === nombreCategoria)

    const task = new Promise((resolve, reject)=>{
    
      resolve( nombreCategoria ? productsFiltered : products );
  
    });
  
    task
    .then( (res)=> setItems(res) )
    .catch( (error)=> console.log("catch: ", error) );

  },[nombreCategoria]);

  

  return (
    <div>
      <ItemList items={items} />  

     </div>
  )
}

export default ItemListContainer  
 