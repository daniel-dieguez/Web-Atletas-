import React from 'react'
import { NavLink } from 'react-bootstrap'
import{Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar nabar-expand-sm navbar-dark -bg-dark">
      <Link className="navbar-brand" to='/'>
        Api
      </Link>
      <div className='navbar-collapse'>
        <NavLink activeclassName='active' className="nav-item nav-link" exact to="/">
          tarea
        </NavLink>
        <NavLink activeclassName='active' className="nav-item nav-link" exact to="/">
          tarea
        </NavLink>
      </div>
    </nav>
  )
}
