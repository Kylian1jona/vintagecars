import React from "react";
import {NavLink} from "react-router-dom"
function Navbar()
{
  return(
    <>
      <nav className="navbar bg-dark text-dark navbar-expand-lg bg-body-tertiary justify-content-center" data-bs-theme="dark">
<ul className="nav justify-content-center">
    <li className="nav-item">
       <NavLink  className="nav-link text-white" to="/">Home</NavLink> 
    </li>
    <li className="nav-item">
      <NavLink className="nav-link text-white" to="/services">Services</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link text-white" to="/ourwork">Our Work</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link text-white" to="/aboutus">About Us</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link text-white" to="/bookonline">Book Online</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link  text-white" to="/login">Login</NavLink>
    </li>
  </ul>
</nav>
    </>
  );
}
export default Navbar;