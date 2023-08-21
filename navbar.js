import React from 'react'
import { Link } from "react-router-dom"
import './navbar.css';
import Image from 'react-bootstrap/Image';
import logo from '../images/logo.png';
const navbar = () => {
  return (
    <nav>
      <nav className="navbar">
        <h3 className='logo'>
          <Image src={logo} width="250" height="85"/></h3>
         <ul className='nav-links'>
          <Link to="/" className='born'>
             <li>Born-Babies</li>
             </Link>    
             <Link to="/girls" className='Girls'>
             <li>Girls</li>
             </Link>    
             <Link to="/boys" className='boys'>
             <li>Boys</li>
             </Link>         
         </ul>
         </nav>
    </nav>
  )
}

export default navbar;

