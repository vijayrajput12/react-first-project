import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>

    <div className='container.fluid nav_bg'>
        <div className='row'>
            <div className='col-10 mx-auto'>

           

<nav className="navbar navbar-expand-lg navbar-light ">
  <NavLink className="navbar-brand" to="#">Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse ml-auto  " id="navbarNav">
    <ul className="navbar-nav  ">
      <li className="nav-item ">
        <NavLink activeClassName='menu_active' exact className="nav-link" to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="About">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="Contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " to="Service">Service</NavLink>
      </li>
    </ul>
  </div>
</nav>
 </div>
        </div>
    </div>


    </>
  )
}
