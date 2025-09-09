import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.webp"
import cart_icon from "../../assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menu,setMenu]=useState("home")
  const {getTotalcartItems} = useContext(ShopContext);
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }
  return (
    <div className='navbar'>
      <Link to="/" style={{textDecoration:"none"}} onClick={() => setMenu("home")}>
        <div className="nav-logo">
          <img src={logo} alt="" height="50px" />
          <p>Shopify</p>
        </div>
      </Link>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}>
          <Link style={{textDecoration:"none",color:"#626262"}} to="/">Home</Link>
          {menu==="home" ? <hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("mens")}}>
          <Link style={{textDecoration:"none",color:"#626262"}} to="/mens">Men</Link>
          {menu==="mens" ? <hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("womens")}}>
          <Link style={{textDecoration:"none",color:"#626262"}} to="/womens">Women</Link>
          {menu==="womens" ? <hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("kids")}}>
          <Link style={{textDecoration:"none",color:"#626262"}} to="/kids">Kids</Link>
          {menu==="kids" ? <hr/>:<></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login" onClick={() => setMenu("home")}> 
          <button>Login</button>
        </Link>
        <Link to="/cart" onClick={() => setMenu("home")} >
          <img src={cart_icon} alt="" height="40px" />
        </Link>
        <div className="nav-cart-count">{getTotalcartItems()}</div>
        <div className="hamburger" onClick={toggleSidebar}>
          {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
      {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)}></div>}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => setSidebarOpen(false)}><Link to="/">Home</Link></li>
          <li onClick={() => setSidebarOpen(false)}><Link to="/mens">Men</Link></li>
          <li onClick={() => setSidebarOpen(false)}><Link to="/womens">Women</Link></li>
          <li onClick={() => setSidebarOpen(false)}><Link to="/kids">Kids</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;