import React from 'react'
import { Link, NavLink, useParams, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

function HostVanDetail() {

  const [van, setVan] = useState(null)

  const params = useParams()

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  useEffect( () => {
      async function fetchVan(){
          const response = await fetch(`/api/vans/${params.id}`)
          const data = await response.json()
          setVan(data.van)
      }
      fetchVan()
  },[params.id])  

  if (!van) return <h2>Loading...</h2>

  return (
    <>
      <section className='host-van-detail-section'>

        <Link to=".." relative='path'> ← Back to all Vans</Link>
    
        <div className='vost-van-detail-container'>
          
          <div className='host-van-detail-img-container'>
            <img alt='van-image' src={van.imageUrl} />
          </div>

          <div className='host-van-detail-info'>
            <span className='van-tag'>{van.type}</span>
            <h1>{van.name}</h1>
            <span>${van.price}/day</span>
          </div>

        </div>

        <nav>
          <NavLink
            style={({isActive}) => isActive ? activeStyle : null} 
            end
            to="."
          >Detail</NavLink>

          <NavLink
            style={({isActive}) => isActive ? activeStyle : null} 
            to="pricing"
          >Pricing</NavLink>

          <NavLink
            style={({isActive}) => isActive ? activeStyle : null} 
            to="photos"
          >Photos</NavLink>
        </nav>

        <Outlet context={[van, setVan]}/> 
          
      </section>
    </>
  )
}

export default HostVanDetail