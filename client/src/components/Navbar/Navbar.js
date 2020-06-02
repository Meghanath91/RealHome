import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import logo from "/images/LogoMakr_98dS8c.png";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link className="navbar-logo" to="/">
          RealHOME
        </Link>  
      </div>

      <div className="links">
        <Link className="navbar-link" to="/properties">
          Properties
        </Link>

        <Link className="navbar-link" to="/reviews">
          Reviews
        </Link>

        <Link className="navbar-link" to="/contact">
          Contact
        </Link>

        <Link className="navbar-link" to="/news">
          News
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
