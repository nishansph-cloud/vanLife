import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {

  return (
    <header>
        <Link className="home" to="/">#Vanlife</Link>
       
        <nav>
            <NavLink 
                className={({isActive}) => isActive ? "current" : ""}
                // NavLink gives us an object to work around with.
                // Among those object it return isActive=true if it matches the element path with current page url 
                to="host"
                >
                Host
            </NavLink>

            <NavLink 
                className={({isActive}) => isActive ? "current" : ""}
                to="about"
                >
                About
            </NavLink>

            <NavLink 
                className={({isActive}) => isActive ? "current" : ""}
                to="vans"
            >
                Vans
            </NavLink>
        </nav>
    
    </header>
  )
}

export default Header