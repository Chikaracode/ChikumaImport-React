import React, { useRef } from "react";
import "./Navbar.css"
import {TiTimes} from "react-icons/ti"
import {FaBars} from "react-icons/fa"
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
 
const navRef = useRef();

const showNavbar = () => {
  navRef.current.classList.toggle("responsive"); 
};

  return (
    <div className="container">
      <img src="https://res.cloudinary.com/dbzv6juuv/image/upload/v1680892017/chikuma-logo_rhc4ck.png" width={200} alt="" />
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Productos del Hogar</a>
        <a href="/#">Skincare</a>
        <a href="/#">Kawaii</a>
        <a href="/#">Tecnología</a>

      <button className="nav-btn nav-close-btn"  onClick={showNavbar}>
        <TiTimes size={20}/>
      </button>
      </nav>
      <CartWidget />
      <button className="nav-btn" onClick={showNavbar} >
        <FaBars size={20}/>
      </button>
      
      
    </div>
  )
}

export default Navbar
