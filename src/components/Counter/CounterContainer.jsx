import { useEffect, useState } from "react";
import CounterPresentation from "./CounterPresentation"

const CounterContainer = ({stock, onAdd, initial=1 }) => {

   const [counter, setCounter] = useState(initial);

  useEffect(()=>{
    setCounter(initial)
  }, [initial]) 

   const sumar = () =>{
    if(counter < stock){
      
      setCounter(counter + 1);
    }else{
      alert("Stock agotado")
    }
   };

   const restar = () => {
    if(counter > 1){
      setCounter(counter - 1);
    }
   }

   return (
   
    <div>
      <CounterPresentation counter={counter} sumar={sumar} restar={restar} onAdd={onAdd} />
    </div>
  )
}

export default CounterContainer

