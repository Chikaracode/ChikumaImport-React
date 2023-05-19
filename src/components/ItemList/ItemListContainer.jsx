import ItemList from "./ItemList"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { db } from "../../firebaseConfig";
import {getDocs, collection, query, where} from "firebase/firestore"


 const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { nombreCategoria } = useParams();
  
    useEffect(() => {
      const itemCollection = collection(db, "products ");
      let consulta;
  
      if (nombreCategoria) {
        consulta = query(itemCollection, where("categoria", "==", nombreCategoria));
      } else {
        consulta = itemCollection; // Sin filtro si no hay categoría
      }
  
      getDocs(consulta)
        .then((res) => {
          const products = res.docs.map((product) => ({
            ...product.data(),
            id: product.id,
          }));
          setItems(products );
        })
        .catch((err) => console.log(err));
    }, [nombreCategoria]);

  
  if(items.length === 0){
    
    return <div style={{display: "flex", justifyContent: "center", marginTop: "250px"}}>
      <BounceLoader color="#de4e7e" size={300} />
    </div>
  }


  return (
    <div>
      <ItemList items={items} />  

     </div>
  )
}

export default ItemListContainer  
 
