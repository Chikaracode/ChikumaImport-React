import React, { useRef } from "react";
import {TiTimes} from "react-icons/ti"
import {FaBars} from "react-icons/fa"
import {Outlet, Link} from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css"

const Navbar = () => {
 
const navRef = useRef();

const showNavbar = () => {
  navRef.current.classList.toggle("responsive"); 
};

  return (
    <div>
      <div className="container">
    <Link to="/"> 
     <img src="https://res.cloudinary.com/dbzv6juuv/image/upload/v1682352882/chikuLogo_gyt5ua.png" width={200} 
      alt="Este es el logo de la empresa" />
    </Link> 

      <nav ref={navRef}>
        <Link to="/" >Home</Link>
        <Link to="/categoria/ProductosDelHogar" >Productos del Hogar</Link>
        <Link to="/categoria/Skincare" >Skincare</Link>
        <Link to="/categoria/Kawaii" >Kawaii</Link>
        <Link to="/categoria/Tecnologia" >Tecnología</Link>

      <button className="nav-btn nav-close-btn"  onClick={showNavbar}>
        <TiTimes size={20}/>
      </button>
      </nav>
      <CartWidget />
      <button className="nav-btn" onClick={showNavbar} >
        <FaBars size={20}/>
      </button>
      </div>
      
    <Outlet />  
    </div>

  )
}

export default Navbar
