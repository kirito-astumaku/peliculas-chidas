
import React from 'react'
import './style.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Barra = () => {
  

  return (
    <div className="padre">
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Pelicualas.com</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Pagina Principal</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/movie/FIlterMas">Mejor calificadas</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
 <Outlet></Outlet>
</div>
  )
}

export default Barra