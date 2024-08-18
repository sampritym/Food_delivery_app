import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate=useNavigate();

    const handleLogOut=()=>{
localStorage.removeItem("authToken");
navigate("/Login")
    }


  return (
    <nav className="navbar">
      <div className="navbar-logo"><Link to="/">FoodieGo</Link></div>
      
      <ul className="navbar-links">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/about">About</Link></li>
        <li className="navbar-item"><Link to="/services">Services</Link></li>
        <li className="navbar-item"><Link to="/contact">Contact</Link></li>
       </ul>
       <form className='search-bar'><input className='search' type='text' placeholder='Search away..' name='search'></input>
      <button className='search-btn' type='submit' >Go</button></form>
      
      {(!localStorage.getItem("authToken"))?
       <div className='navbar-btn'>
        <div className="btn"><Link to="/Register">Register</Link></div>
        <div className="btn">|</div>
        <div className="btn"><Link to="/Login">Login</Link></div>
      </div>
      :
      <div className='navbar-btn'>
      <div className="btn"><Link to="">My cart</Link></div>
      <div className="btn">|</div>
      <div className="btn"><Link to="">My orders</Link></div>
      <div className="btn">|</div>
      <div className="btn" onClick={handleLogOut}><Link to="">Logout</Link></div>
      </div>
      }
    </nav>
  )
}
