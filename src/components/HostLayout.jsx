import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function Host() {

  const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

  return (
    <>      
      <nav className='host-nav'>
        <NavLink
          style={({isActive}) => isActive ? activeStyles : null}
          end
          // end, telling router to end the active, if other children are active
          to="."
          >Dashboard</NavLink>

        <NavLink 
          style={({isActive}) => isActive ? activeStyles : null}
          to="income"
          >Income</NavLink>

        <NavLink 
          style={({isActive}) => isActive ? activeStyles : null}
          to="host-vans"
        >Vans</NavLink>

        <NavLink 
          style={({isActive}) => isActive ? activeStyles : null}
          to="reviews"
        >Reviews</NavLink>
      </nav>
      
      <Outlet />
    </>
  )
}

export default Host