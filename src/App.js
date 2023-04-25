import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";


function App() {



  return (
   <BrowserRouter>

     <Routes>
      <Route element={<Navbar/>}> 
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/categoria/:nombreCategoria" element={ <ItemListContainer /> } />


        <Route path="itemDetail/:id" element={ <ItemDetailContainer /> }/> 

        <Route path="/sign-up" element={<h1>Acá deberías registrarte</h1>}/>

        <Route path="*" element={<h1>Esta ruta no existe-Error 404</h1>}/>

       </Route>
     </Routes>

   </BrowserRouter>
  ); 
}

export default App;
