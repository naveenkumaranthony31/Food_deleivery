import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file for styling
import 'bootstrap/dist/css/bootstrap.css';
import Logo from "../../assets/images/logo.png";
import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
 const [list,setList]=useState("All")
  return (
   <div className="nav-container">
  <img src={Logo} alt="logo" className="logo" />
   <div>
   <ul className="nav-list">
  <li onClick={()=>setList("All")} className={list==="All"?"active":""}>All</li>
  <li onClick={()=>setList("Pizza")} className={list==="Pizza"?"active":""}>Pizza</li>
  <li onClick={()=>setList("Burger")} className={list==="Burger"?"active":""}>Burger</li>
</ul>
   </div>
   <div className="nav-button">
    <a href="" ><CiShoppingCart className="cart-order"/></a>
   <button>Sigin</button>
   
   </div>
  </div>
  );
};

export default Navbar;  
