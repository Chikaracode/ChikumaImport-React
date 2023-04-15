import styles from "./Counter.module.css"

const CounterPresentation = (
    {sumar, 
    counter, 
    restar, 
    sumar10, 
    reiniciar, 
    login, 
    user
}) => {
  return (
    <div className={styles.contador}>
      <h1>Este es el contador</h1>
       <button onClick={sumar}>sumar</button> 
      <h3>{counter}</h3>
      <button onClick={restar}>restar</button>
      <button onClick={sumar10}>Sumar 10</button>
      <button onClick={reiniciar}>Reiniciar</button>


      <button onClick={login}>Login</button>

      {
      user.length > 0 ? <h2>Bienvenido {user}</h2> : <h2>Ingresa</h2>
      }
    </div>
  )
}

export default CounterPresentation
