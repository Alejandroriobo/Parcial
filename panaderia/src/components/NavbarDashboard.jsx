import React from "react";
import Icono from "../assets/panadero.png"
import "../styles/ListaProducto.css"

const NavbarDashboard = () => {
    const usuario = localStorage.getItem("username")
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiar">
        <div className="container-fluid">
          <img src={Icono}  alt="" />
          <a className="navbar-brand" href="#">{usuario}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse todomenu" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active menu" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link menu" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link menu" href="#">Pricing</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle menu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item " href="#">Action</a></li>
                  <li><a className="dropdown-item " href="#">Another action</a></li>
                  <li><a className="dropdown-item " href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
    )
}
export default NavbarDashboard;