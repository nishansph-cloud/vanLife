import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function HostVanDetail() {

  const [van, setVan] = useState(null)

  const params = useParams()

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

        <Link to="../host-vans">Back to all Vans</Link>
    
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
          <Link>Detail</Link>
          <Link>Pricing</Link>
          <Link>Photos</Link>
        </nav>

        <h1 className='detail-name'><span>Name:</span>{van.name}</h1>

        <h1><span>category:</span>{van.type}</h1>

        <p><span>Description:</span>{van.description}</p>
          
      </section>
    </>
  )
}

export default HostVanDetail