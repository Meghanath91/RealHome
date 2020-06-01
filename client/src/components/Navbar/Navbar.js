import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar=()=>{
  return(
    <nav className="navbar" >
   
    <Link className="navbar-link" to="/">Home</Link>

    <Link className="navbar-link" to="/properties">Properties</Link>

    <Link className="navbar-link" to="/reviews"></Link>

    <Link className="navbar-link" to="/contact">Contact</Link>

    <Link className="navbar-link" to="/news">News</Link>
   
    </nav>
  )
};

export default Navbar;