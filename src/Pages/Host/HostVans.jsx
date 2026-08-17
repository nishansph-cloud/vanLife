import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function HostVans() {

  const [vans, setvans] = useState([])

  useEffect(() => {
    async function fetchVans(){
      const response = await fetch(`/api/vans?hostId=${123}`)
      const data = await response.json()
      setvans(data.vans)
    }
    fetchVans()
  },[])

  return (
    <>
      <section className='host-van-section'>
        
        <h1>Your listed Vans</h1>
        
        {vans.map(van => 
          <Link key={van.id} to={van.id}>
            
            <div className='host-van-container'>
              
              <div className='host-van-img-container'>
                <img alt='van-image' src={van.imageUrl} />
              </div>

              <div className='host-van-info'>
                <h1>{van.name}</h1>
                <span>${van.price}/day</span>
              </div>

            </div>
          
          </Link>
        )}
     
      </section>
    </>
  )
}

export default HostVans