import {useState} from "react"
import CounterPresentation from "./CounterPresentation"

const Counter = () => {

const [counter, setCounter] = useState(0)
const [user, setUser] = useState("")

const sumar = () => {
  setCounter(counter + 1)
}

const restar = () => {
   setCounter(counter - 1)
 }

const sumar10 = () => {
  setCounter(counter + 10)
}

const reiniciar = () => {
  setCounter(0)
}

const login = () =>{
  setUser('Jungkook')
}

  return (
    <div>
      <CounterPresentation 
      sumar={sumar} 
      restar={restar} 
      counter={counter}
      sumar10={sumar10} 
      reiniciar={reiniciar} 
      login={login} 
      user={user} />
    </div>
  )
}

export default Counter
