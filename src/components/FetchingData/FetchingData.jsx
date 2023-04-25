import { useEffect, useState } from "react"

const FetchingData = () => {

const [posts, setPosts] = useState([])
const [postsById, setPostsById] = useState({})

useEffect(() => {
const obtenerPost = fetch("https://jsonplaceholder.typicode.com/users")
obtenerPost
.then(res => res.json())
.then(res => setPosts(res))

const obtenerPorId = fetch("https://jsonplaceholder.typicode.com/users/2")
obtenerPorId
.then(res => res.json())
.then(res => setPostsById(res))

}, []);

const crearNuevoPost = () => {
   let promesa = fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
        "userId": 7,
        "name": "Jungkook",
        "edad": 25,
    }),
        
    });
    promesa.then().catch()
};

const editarUser = ()=>{
    fetch("https://jsonplaceholder.typicode.com/users/2", {
        method: "PATCH",
        body: JSON.stringify({
            name:" Jeon Jungkook"
        })
    })
}

 console.log(posts)
 console.log(postsById)


  return (
    <div>
      <h1>Peticiones</h1>
      <button onClick={crearNuevoPost}>Crear Producto</button>
      <button onClick={editarUser}>Editar usuario</button>

    </div>
  )
}

export default FetchingData
